// Configuración de EmailJS usando variables de entorno
// Las variables están definidas en el archivo .env
// Para Vite, las variables deben empezar con VITE_ para ser accesibles en el frontend

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  toEmail: import.meta.env.VITE_EMAIL_TO || 'raristides.caamano@gmail.com'
};

// Ejemplo de plantilla para EmailJS:
// Subject: Nuevo mensaje de contacto de {{from_name}}
// 
// Nombre: {{from_name}}
// Email: {{from_email}}
// 
// Mensaje:
// {{message}}
//
// Este mensaje fue enviado desde el portafolio web.
