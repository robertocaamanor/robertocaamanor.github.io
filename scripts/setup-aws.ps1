# Script para configurar la infraestructura AWS inicial
# Uso: .\scripts\setup-aws.ps1

param(
    [string]$DomainName = "robertocaamano.com",
    [string]$Region = "us-east-1"
)

Write-Host "🏗️ Configurando infraestructura AWS para $DomainName" -ForegroundColor Green

# 1. Crear bucket S3
Write-Host "📦 Creando bucket S3..." -ForegroundColor Cyan
try {
    aws s3 mb s3://$DomainName --region $Region
    Write-Host "✅ Bucket S3 creado: $DomainName" -ForegroundColor Green
} catch {
    Write-Host "⚠️  El bucket ya existe o hay un error. Continuando..." -ForegroundColor Yellow
}

# 2. Configurar bucket para website hosting
Write-Host "🌐 Configurando website hosting..." -ForegroundColor Cyan
$WebsiteConfig = @"
{
    "IndexDocument": {
        "Suffix": "index.html"
    },
    "ErrorDocument": {
        "Key": "404.html"
    }
}
"@

$WebsiteConfig | Out-File -FilePath "website-config.json" -Encoding UTF8
aws s3api put-bucket-website --bucket $DomainName --website-configuration file://website-config.json
Remove-Item "website-config.json"

# 3. Configurar política del bucket
Write-Host "🔐 Configurando política del bucket..." -ForegroundColor Cyan
$BucketPolicy = @"
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::$DomainName/*"
        }
    ]
}
"@

$BucketPolicy | Out-File -FilePath "bucket-policy.json" -Encoding UTF8
aws s3api put-bucket-policy --bucket $DomainName --policy file://bucket-policy.json
Remove-Item "bucket-policy.json"

# 4. Desactivar bloqueo de acceso público
Write-Host "🔓 Configurando acceso público..." -ForegroundColor Cyan
aws s3api put-public-access-block --bucket $DomainName --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

Write-Host "✅ Configuración básica de S3 completada!" -ForegroundColor Green
Write-Host "" -ForegroundColor White
Write-Host "📋 SIGUIENTES PASOS:" -ForegroundColor Yellow
Write-Host "1. Configura CloudFront manualmente en la consola AWS:" -ForegroundColor White
Write-Host "   - Origin: $DomainName.s3-website-$Region.amazonaws.com" -ForegroundColor Gray
Write-Host "   - Viewer Protocol Policy: Redirect HTTP to HTTPS" -ForegroundColor Gray
Write-Host "   - Compress Objects Automatically: Yes" -ForegroundColor Gray
Write-Host "   - Alternate Domain Names: $DomainName, www.$DomainName" -ForegroundColor Gray
Write-Host "" -ForegroundColor White
Write-Host "2. Solicita certificado SSL en ACM (Certificate Manager):" -ForegroundColor White
Write-Host "   - Región: us-east-1 (obligatorio para CloudFront)" -ForegroundColor Gray
Write-Host "   - Dominio: $DomainName" -ForegroundColor Gray
Write-Host "   - Dominio adicional: www.$DomainName" -ForegroundColor Gray
Write-Host "" -ForegroundColor White
Write-Host "3. Configura Route 53:" -ForegroundColor White
Write-Host "   - Crear hosted zone para $DomainName" -ForegroundColor Gray
Write-Host "   - Crear registros A/AAAA que apunten a CloudFront" -ForegroundColor Gray
Write-Host "" -ForegroundColor White
Write-Host "4. Una vez configurado CloudFront, agrega el Distribution ID a .env:" -ForegroundColor White
Write-Host "   AWS_CLOUDFRONT_ID=tu_distribution_id_aqui" -ForegroundColor Gray