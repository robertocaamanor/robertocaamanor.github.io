# Script simple de PowerShell para desplegar en AWS
param(
    [string]$BucketName = "robertocaamano.com",
    [string]$Region = "us-east-1",
    [string]$CloudFrontId = "E10BIKEUBMJOOI"
)

Write-Host "Deploy to AWS S3 + CloudFront" -ForegroundColor Green
Write-Host "Bucket: $BucketName" -ForegroundColor Cyan

# Build project
Write-Host "Building project..." -ForegroundColor Yellow
npm run build:aws

if (-not (Test-Path "dist")) {
    Write-Host "Error: dist directory not found" -ForegroundColor Red
    exit 1
}

# Upload to S3
Write-Host "Uploading to S3..." -ForegroundColor Cyan
aws s3 sync dist/ s3://$BucketName --delete --region $Region

# Set cache headers for HTML (no cache)
Write-Host "Setting cache headers..." -ForegroundColor Yellow
aws s3 cp dist/ s3://$BucketName --recursive --exclude "*" --include "*.html" --metadata-directive REPLACE --cache-control "no-cache, no-store, must-revalidate" --region $Region

# Set cache headers for static assets (1 year)
aws s3 cp dist/ s3://$BucketName --recursive --exclude "*" --include "*.css" --include "*.js" --include "*.png" --include "*.jpg" --include "*.svg" --include "*.ico" --metadata-directive REPLACE --cache-control "public, max-age=31536000" --region $Region

# Invalidate CloudFront
if ($CloudFrontId) {
    Write-Host "Invalidating CloudFront cache..." -ForegroundColor Cyan
    aws cloudfront create-invalidation --distribution-id $CloudFrontId --paths "/*" --region $Region
    Write-Host "CloudFront invalidation completed" -ForegroundColor Green
}

Write-Host "Deployment completed successfully!" -ForegroundColor Green
Write-Host "Site URL: https://$BucketName" -ForegroundColor Cyan