#!/bin/bash

# Script para desplegar en AWS S3 + CloudFront
# Uso: ./scripts/deploy-aws.sh

set -e

echo "🚀 Iniciando despliegue en AWS..."

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: Ejecuta este script desde la raíz del proyecto"
    exit 1
fi

# Construir el proyecto
echo "🔧 Construyendo proyecto..."
npm run build:aws

# Verificar que el directorio dist existe
if [ ! -d "dist" ]; then
    echo "❌ Error: No se generó el directorio dist"
    exit 1
fi

# Configurar variables
BUCKET_NAME="robertocaamano.com"
REGION="us-east-1"

echo "📦 Subiendo archivos a S3 bucket: $BUCKET_NAME"

# Sincronizar archivos con S3
aws s3 sync dist/ s3://$BUCKET_NAME --delete --region $REGION

# Configurar headers para archivos estáticos
echo "⚙️ Configurando headers para caché..."

# HTML files (no cache)
aws s3 cp dist/ s3://$BUCKET_NAME --recursive --exclude "*" --include "*.html" \
    --metadata-directive REPLACE \
    --cache-control "no-cache, no-store, must-revalidate" \
    --region $REGION

# CSS y JS files (cache por 1 año)
aws s3 cp dist/ s3://$BUCKET_NAME --recursive --exclude "*" --include "*.css" --include "*.js" \
    --metadata-directive REPLACE \
    --cache-control "public, max-age=31536000, immutable" \
    --region $REGION

# Assets (imágenes, fuentes, etc.)
aws s3 cp dist/ s3://$BUCKET_NAME --recursive --exclude "*" --include "*.png" --include "*.jpg" --include "*.jpeg" --include "*.gif" --include "*.svg" --include "*.webp" --include "*.ico" --include "*.woff" --include "*.woff2" --include "*.ttf" \
    --metadata-directive REPLACE \
    --cache-control "public, max-age=31536000" \
    --region $REGION

echo "🌐 Invalidando caché de CloudFront..."

# Obtener el CloudFront Distribution ID (necesitarás configurarlo)
if [ -z "$AWS_CLOUDFRONT_ID" ]; then
    echo "⚠️  Advertencia: AWS_CLOUDFRONT_ID no configurado. Saltando invalidación de CloudFront."
    echo "   Configura esta variable en tu .env para invalidar automáticamente el caché."
else
    aws cloudfront create-invalidation --distribution-id $AWS_CLOUDFRONT_ID --paths "/*" --region $REGION
    echo "✅ Invalidación de CloudFront completada"
fi

echo "✅ Despliegue completado exitosamente!"
echo "🌍 Tu sitio estará disponible en: https://$BUCKET_NAME"