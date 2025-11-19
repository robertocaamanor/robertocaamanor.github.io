# Script de PowerShell para desplegar en AWS
# Uso: .\scripts\deploy-aws.ps1

param(
    [string]$BucketName = "robertocaamano.com",
    [string]$Region = "us-east-1"
)

Write-Host "🚀 Iniciando despliegue en AWS..." -ForegroundColor Green

# Función para cargar variables del archivo .env
function Load-EnvFile {
    param([string]$EnvFile)
    
    if (Test-Path $EnvFile) {
        Write-Host "📄 Cargando variables de entorno desde $EnvFile" -ForegroundColor Cyan
        Get-Content $EnvFile | ForEach-Object {
            if ($_ -match "^\s*([^#][^=]*)\s*=\s*(.*)\s*$") {
                $name = $matches[1].Trim()
                $value = $matches[2].Trim()
                Set-Item -Path "env:$name" -Value $value
                Write-Host "   ✓ $name" -ForegroundColor Gray
            }
        }
    }
}

# Cargar variables de entorno
Load-EnvFile ".env"

# Verificar que estamos en el directorio correcto
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: Ejecuta este script desde la raíz del proyecto" -ForegroundColor Red
    exit 1
}

# Construir el proyecto
Write-Host "🔧 Construyendo proyecto..." -ForegroundColor Yellow
npm run build:aws

# Verificar que el directorio dist existe
if (-not (Test-Path "dist")) {
    Write-Host "❌ Error: No se generó el directorio dist" -ForegroundColor Red
    exit 1
}

Write-Host "📦 Subiendo archivos a S3 bucket: $BucketName" -ForegroundColor Cyan

# Sincronizar archivos con S3
aws s3 sync dist/ s3://$BucketName --delete --region $Region

# Configurar headers para archivos estáticos
Write-Host "⚙️ Configurando headers para caché..." -ForegroundColor Yellow

# HTML files (no cache)
aws s3 cp dist/ s3://$BucketName --recursive --exclude "*" --include "*.html" --metadata-directive REPLACE --cache-control "no-cache, no-store, must-revalidate" --region $Region

# CSS y JS files (cache por 1 año)
aws s3 cp dist/ s3://$BucketName --recursive --exclude "*" --include "*.css" --include "*.js" --metadata-directive REPLACE --cache-control "public, max-age=31536000, immutable" --region $Region

# Assets (imágenes, fuentes, etc.)
aws s3 cp dist/ s3://$BucketName --recursive --exclude "*" --include "*.png" --include "*.jpg" --include "*.jpeg" --include "*.gif" --include "*.svg" --include "*.webp" --include "*.ico" --include "*.woff" --include "*.woff2" --include "*.ttf" --metadata-directive REPLACE --cache-control "public, max-age=31536000" --region $Region

Write-Host "🌐 Verificando CloudFront..." -ForegroundColor Cyan

# Verificar si CloudFront ID está configurado
$CloudFrontId = $env:AWS_CLOUDFRONT_ID
if ([string]::IsNullOrEmpty($CloudFrontId)) {
    Write-Host "⚠️ Advertencia: AWS_CLOUDFRONT_ID no configurado. Saltando invalidación de CloudFront." -ForegroundColor Yellow
    Write-Host "   Configura esta variable en tu .env para invalidar automáticamente el caché." -ForegroundColor Yellow
} else {
    Write-Host "🔄 Invalidando caché de CloudFront (ID: $CloudFrontId)..." -ForegroundColor Cyan
    $invalidationResult = aws cloudfront create-invalidation --distribution-id $CloudFrontId --paths "/*" --region $Region --output json | ConvertFrom-Json
    if ($invalidationResult.Invalidation.Id) {
        Write-Host "✅ Invalidación de CloudFront completada (ID: $($invalidationResult.Invalidation.Id))" -ForegroundColor Green
    }
}

Write-Host "✅ Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "🌍 Tu sitio estará disponible en: https://$BucketName" -ForegroundColor Cyan