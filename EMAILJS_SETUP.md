# Configuración de EmailJS para el Formulario de Contacto

Para que el formulario de contacto funcione y envíe emails a `raristides.caamano@gmail.com`, necesitas configurar EmailJS.

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ve a [https://emailjs.com/](https://emailjs.com/)
- Crea una cuenta gratuita

### 2. Configurar un servicio de email
- En el dashboard, ve a "Email Services"
- Haz clic en "Add New Service"
- Selecciona tu proveedor de email (Gmail recomendado)
- Sigue las instrucciones para conectar tu cuenta de Gmail
- Copia el **Service ID** que se genera

### 3. Crear una plantilla de email
- Ve a "Email Templates"
- Haz clic en "Create New Template"
- Configura la plantilla con:
  - **To Email**: `raristides.caamano@gmail.com`
  - **Subject**: `Nuevo mensaje de contacto de {{from_name}}`
  - **Content**:
    ```
    Nombre: {{from_name}}
    Email: {{from_email}}
    
    Mensaje:
    {{message}}
    
    Este mensaje fue enviado desde el portafolio web.
    ```
- Guarda la plantilla y copia el **Template ID**

### 4. Obtener la Public Key
- Ve a "Account" > "General"
- Copia tu **Public Key**

### 5. Configurar las variables de entorno
- Copia el archivo `.env.example` como `.env`:
  ```bash
  cp .env.example .env
  ```
- Abre el archivo `.env` y reemplaza los valores placeholder con tus credenciales reales:
  ```env
  VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
  VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui  
  VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
  VITE_EMAIL_TO=raristides.caamano@gmail.com
  ```

### 6. Probar el formulario
- Ejecuta `npm run dev`
- Completa y envía el formulario de contacto
- Verifica que llegue el email a `raristides.caamano@gmail.com`

## Características implementadas:

✅ **Formulario funcional** con validación  
✅ **Estado de carga** durante el envío  
✅ **Mensajes de éxito/error** para feedback al usuario  
✅ **Integración con EmailJS** para envío real de emails  
✅ **Configuración centralizada** para fácil mantenimiento  

## Nota de seguridad:
✅ **Variables de entorno**: Las credenciales están ahora en `.env` (no se suben al repositorio)  
✅ **Seguridad frontend**: EmailJS está diseñado para uso en frontend con limitaciones por dominio  
✅ **Gitignore**: El archivo `.env` está excluido del control de versiones  

## Archivos de configuración:
- **`.env`**: Contiene las credenciales reales (no se sube al repo)
- **`.env.example`**: Plantilla con ejemplos de las variables necesarias
- **`src/config/emailConfig.ts`**: Lee las variables de entorno automáticamente

## Plan gratuito de EmailJS:
- 200 emails por mes
- Perfecto para un portafolio personal

¡Tu formulario de contacto estará listo para recibir mensajes! 📧
