# Despliegue en AWS - Guía Completa

Esta guía te ayudará a desplegar tu portfolio personal en AWS usando tu dominio `robertocaamano.com`.

## Arquitectura

- **S3**: Hosting de archivos estáticos
- **CloudFront**: CDN global y certificado SSL
- **Route 53**: Gestión de DNS
- **Certificate Manager**: Certificado SSL gratuito

## Configuración Inicial

### 1. Configurar AWS CLI

Asegúrate de tener AWS CLI configurado con tus credenciales:

```powershell
aws configure
```

### 2. Ejecutar configuración inicial

```powershell
# Configurar infraestructura básica de S3
.\scripts\setup-aws.ps1
```

### 3. Configurar CloudFront (Manual)

1. Ve a la consola de AWS CloudFront
2. Crear nueva distribución:
   - **Origin Domain**: `robertocaamano.com.s3-website-us-east-1.amazonaws.com`
   - **Viewer Protocol Policy**: Redirect HTTP to HTTPS
   - **Compress Objects**: Yes
   - **Default Root Object**: `index.html`
   - **Custom Error Pages**:
     - HTTP Error Code: 403, 404
     - Error Response Path: `/404.html`
     - HTTP Response Code: 200

### 4. Configurar Certificado SSL

1. Ve a AWS Certificate Manager (ACM) - **Región: us-east-1**
2. Solicitar certificado público
3. Agregar dominios:
   - `robertocaamano.com`
   - `www.robertocaamano.com`
4. Validar por DNS (seguir instrucciones de AWS)

### 5. Configurar dominio personalizado en CloudFront

1. Editar la distribución de CloudFront
2. En "Alternate domain names (CNAMEs)":
   - Agregar: `robertocaamano.com`
   - Agregar: `www.robertocaamano.com`
3. En "Custom SSL certificate":
   - Seleccionar el certificado creado en ACM

### 6. Configurar Route 53

1. Crear Hosted Zone para `robertocaamano.com`
2. Crear registro A:
   - **Name**: dejar vacío (para dominio raíz)
   - **Type**: A
   - **Alias**: Yes
   - **Route traffic to**: CloudFront distribution
   - **Distribution**: Seleccionar tu distribución
3. Crear registro A para www:
   - **Name**: www
   - **Type**: A
   - **Alias**: Yes
   - **Route traffic to**: CloudFront distribution

### 7. Actualizar nameservers del dominio

En tu registrador de dominios (donde compraste `robertocaamano.com`), actualiza los nameservers con los de Route 53.

## Configuración del Proyecto

### 1. Crear archivo .env

```bash
cp .env.example .env
```

Edita `.env` y agrega:

```env
# Configuración AWS
AWS_CLOUDFRONT_ID=tu_distribution_id_aqui
AWS_REGION=us-east-1
AWS_S3_BUCKET=robertocaamano.com
```

### 2. Construir el proyecto

```powershell
npm run build:aws
```

### 3. Desplegar

```powershell
# Opción 1: Script automático
.\scripts\deploy-aws.ps1

# Opción 2: Comando npm
npm run deploy:aws

# Opción 3: Comando manual
npm run build:aws
aws s3 sync dist/ s3://robertocaamano.com --delete
```

## Comandos Disponibles

```powershell
# Desarrollo local
npm run dev

# Construir para producción
npm run build:aws

# Desplegar a AWS
npm run deploy:aws

# Construir y desplegar en un comando
npm run build-and-deploy:aws

# Configuración inicial de AWS
.\scripts\setup-aws.ps1
```

## Optimizaciones Incluidas

- **Compresión automática** en CloudFront
- **Caché optimizado** para diferentes tipos de archivos
- **Minificación** automática con Vite
- **Code splitting** para mejor rendimiento
- **Assets optimization** para imágenes y fuentes

## Costos Estimados (USD/mes)

- **S3**: ~$0.50 (por 1GB de almacenamiento + transferencias)
- **CloudFront**: ~$1-5 (primeros 1TB de transferencia gratuitos)
- **Route 53**: ~$0.50 (hosted zone)
- **Certificate Manager**: Gratuito

**Total estimado**: $1-6 USD/mes para tráfico pequeño-mediano

## Troubleshooting

### Error: "Access Denied"
```powershell
# Verificar política del bucket
aws s3api get-bucket-policy --bucket robertocaamano.com
```

### Error: "CloudFront no encuentra archivos"
```powershell
# Verificar que el origin está configurado correctamente
# Debe ser: robertocaamano.com.s3-website-us-east-1.amazonaws.com
```

### Error: "SSL/TLS certificate"
```powershell
# Verificar que el certificado está en us-east-1
# CloudFront solo acepta certificados de esta región
```

## Automatización con GitHub Actions (Opcional)

Si quieres automatizar el despliegue desde GitHub:

1. Configura los secrets en GitHub:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY` 
   - `AWS_CLOUDFRONT_ID`

2. El workflow en `.github/workflows/deploy.yml` se ejecutará automáticamente.

## Monitoreo

- **CloudWatch**: Métricas de S3 y CloudFront
- **AWS Console**: Dashboards de uso y costos
- **Route 53 Health Checks**: Verificación de disponibilidad

¡Listo! Tu sitio estará disponible en `https://robertocaamano.com` 🚀