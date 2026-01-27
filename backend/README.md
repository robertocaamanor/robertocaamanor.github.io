# Backend API - Portfolio

Backend desarrollado con NestJS y PostgreSQL (Supabase) para gestionar el contenido del portafolio.

## 🚀 Instalación

```bash
# Instalar dependencias (ya hecho)
npm install
```

## ⚙️ Configuración

El archivo `.env` ya está configurado con las credenciales de Supabase.

## 📦 Scripts Disponibles

```bash
# Desarrollo con hot-reload
npm run start:dev

# Producción
npm run build
npm run start:prod

# Poblar base de datos con datos iniciales
npm run seed
```

## 🎯 Endpoints API

### Experiences
- `GET /api/experiences` - Obtener todas las experiencias
- `GET /api/experiences/:id` - Obtener una experiencia
- `POST /api/experiences` - Crear experiencia
- `PUT /api/experiences/:id` - Actualizar experiencia
- `DELETE /api/experiences/:id` - Eliminar experiencia

### Projects
- `GET /api/projects` - Obtener todos los proyectos
- `GET /api/projects/:id` - Obtener un proyecto
- `POST /api/projects` - Crear proyecto
- `PUT /api/projects/:id` - Actualizar proyecto
- `DELETE /api/projects/:id` - Eliminar proyecto

### Certifications
- `GET /api/certifications` - Obtener todas las certificaciones
- `GET /api/certifications/:id` - Obtener una certificación
- `POST /api/certifications` - Crear certificación
- `PUT /api/certifications/:id` - Actualizar certificación
- `DELETE /api/certifications/:id` - Eliminar certificación

### Education
- `GET /api/education` - Obtener toda la educación
- `GET /api/education/:id` - Obtener una educación
- `POST /api/education` - Crear educación
- `PUT /api/education/:id` - Actualizar educación
- `DELETE /api/education/:id` - Eliminar educación

## 🗄️ Base de Datos

TypeORM está configurado con `synchronize: true` para desarrollo, lo que crea automáticamente las tablas en la primera ejecución.

⚠️ **IMPORTANTE**: Cambiar `synchronize` a `false` en producción.

## 📝 Próximos Pasos

1. Ejecutar `npm run start:dev` para iniciar el servidor
2. Verificar que las tablas se crean en Supabase
3. Ejecutar el seed para poblar con datos iniciales
4. Actualizar el frontend para consumir esta API
