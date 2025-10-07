# Portfolio Roberto Caamaño - robertocaamanor.github.io

Portafolio web personal desarrollado con React, TypeScript y TailwindCSS. Incluye un CV dinámico e interactivo optimizado para impresión. Actualmente el proyecto NO incorpora generación automática de PDF; para obtener una versión en PDF usa el diálogo de impresión del navegador (Guardar como PDF).

## 🚀 Características

- **Portafolio Completo**: Información personal, experiencia, proyectos y contacto
- **CV Dinámico**: Currículum Vitae interactivo con diseño profesional
- **Descarga PDF**: Actualmente no existe una generación automática con un solo clic. Para obtener el CV en PDF, abre la ruta `/cv` en el navegador y usa la opción Imprimir/Guardar como PDF del navegador. El CV incluye estilos optimizados para A4 y paginación para mejorar el resultado al imprimir.
- **Responsive Design**: Optimizado para desktop, tablet y móvil
- **Dark Mode**: Tema oscuro/claro con persistencia
- **React Router**: Navegación entre portafolio y CV
- **Optimizado para Impresión**: Estilos específicos para impresión en papel

## 🛠️ Tecnologías

- **Frontend**: React 19.1.1, TypeScript
- **Styling**: TailwindCSS 4.1.12
- **Routing**: React Router DOM
- **PDF Generation**: Actualmente este proyecto NO incluye generación automática (server-side ni client-side) de PDF. El CV está pensado para imprimirse o guardarse como PDF desde el navegador.
  
Si deseas añadir generación automática, algunas opciones comunes son: `react-to-print` (impresión de componentes), `html2canvas` + `jspdf` (captura y generación cliente) o renderizado servidor con Puppeteer/wkhtmltopdf.
- **Icons**: Heroicons
- **Email**: EmailJS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📋 Funcionalidades del CV

### Características del CV Dinámico
- **Información Personal**: Datos de contacto, foto de perfil, ubicación
- **Experiencia Laboral**: Historial completo con descripciones y tecnologías
- **Educación**: Formación académica y certificaciones
- **Habilidades**: Técnicas y blandas con visualización
- **Logros**: Destacados profesionales y personales
- **Idiomas**: Niveles de competencia con barras de progreso
- **Referencias**: Disponibles bajo solicitud

### Funcionalidades de Descarga
- **Impresión Optimizada**: CSS específico para impresión
- **Formato A4**: Diseñado para papel estándar
- **Paginación Inteligente**: Evita cortes de contenido
- **PDF Directo**: (No disponible) La descarga directa a PDF no está implementada.
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### Cómo descargar el CV en PDF (instrucciones rápidas)

1. Ejecuta la app con `npm run dev` y abre `http://localhost:5173/cv` (ruta `/cv`).
2. Abre el diálogo de impresión del navegador (Ctrl+P / Cmd+P).
3. Selecciona "Guardar como PDF" o una impresora PDF disponible.
4. Ajusta márgenes y escala si es necesario y guarda.

### Opciones para añadir generación automática de PDF

- Cliente: `react-to-print` — sencillo, imprime un componente React manteniendo estilos CSS.
- Cliente: `html2canvas` + `jspdf` — captura la página y genera un PDF; requiere ajustes para paginación.
- Servidor: Headless Chrome (Puppeteer) o `wkhtmltopdf` — renderiza la ruta `/cv` a PDF en el backend y ofrece descarga directa.

Si quieres, puedo implementar la opción de generación automática (por ejemplo, un botón "Descargar PDF" usando `react-to-print` o `html2canvas` + `jspdf`). Dime cuál prefieres y lo hago.

## 🎯 Navegación

### Portafolio Principal (/)
- Hero Section con llamadas a la acción
- Sección About con habilidades
- Experiencia laboral resumida
- Proyectos destacados
- Formulario de contacto
- Botón "Ver CV Interactivo" prominente

### CV Dinámico (/cv)
- Header con navegación de regreso
- Información completa y detallada
- Controles de descarga e impresión
- Formato optimizado para PDF
- Todas las secciones expandidas

## 🚀 Instalación y Desarrollo

```bash
# Clonar repositorio
git clone https://github.com/robertocaamanor/robertocaamanor.github.io.git
cd robertocaamanor.github.io

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Deploy a GitHub Pages
npm run build-and-deploy
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── About.tsx          # Sección acerca de mí
│   ├── Contact.tsx        # Formulario de contacto
│   ├── CV.tsx            # ✨ CV dinámico (NUEVO)
│   ├── Experience.tsx     # Experiencia laboral
│   ├── Footer.tsx         # Pie de página
│   ├── Header.tsx         # Navegación (actualizado con rutas)
│   ├── Hero.tsx          # Hero section (botón CV agregado)
│   └── Projects.tsx       # Proyectos destacados
├── data/
│   ├── about.ts          # Habilidades técnicas
│   ├── contact.ts        # Información de contacto
│   ├── content.ts        # Textos generales
│   ├── cv.ts            # ✨ Datos específicos del CV (NUEVO)
│   ├── experience.ts     # Experiencia laboral completa
│   ├── index.ts          # Exportaciones centralizadas
│   ├── navigation.ts     # Menú de navegación
│   ├── personal.ts       # Información personal
│   ├── projects.ts       # Proyectos y portfolio
│   └── socialMedia.ts    # Redes sociales
├── context/
│   └── ThemeContext.tsx   # Contexto para dark mode
└── config/
    └── emailConfig.ts     # Configuración EmailJS
```

## 🎨 Personalización

### Datos del CV
Edita `src/data/cv.ts` para personalizar:
- Educación y certificaciones
- Idiomas y niveles
- Habilidades blandas
- Logros destacados
- Referencias

### Información Personal
Modifica `src/data/personal.ts` para actualizar:
- Información de contacto
- Foto de perfil
- Descripción profesional
- Años de experiencia

### Experiencia Laboral
Gestiona `src/data/experience.ts` para:
- Agregar nuevos trabajos
- Actualizar descripciones
- Modificar tecnologías utilizadas
- Cambiar períodos de trabajo

## 🖨️ Configuración de Impresión

El CV incluye estilos específicos para impresión:
- Formato A4 optimizado
- Margenes ajustados
- Colores adaptados para impresión
- Paginación inteligente
- Eliminación de elementos de navegación

## 📱 Responsive Design

- **Desktop**: Diseño completo de 2 columnas
- **Tablet**: Layout adaptado con columnas flexibles
- **Mobile**: Diseño vertical de 1 columna
- **Impresión**: Optimizado para A4

## 🔧 Scripts Disponibles

```bash
npm run dev              # Servidor de desarrollo
npm run build           # Build para producción
npm run preview         # Preview del build
npm run lint            # Linting del código
npm run deploy          # Deploy a GitHub Pages
npm run build-and-deploy # Build + Deploy
```

## 🌐 Deploy

El sitio se deploya automáticamente en GitHub Pages:
- **URL**: https://robertocaamanor.github.io
- **CV Directo**: https://robertocaamanor.github.io/cv
- **Auto-deploy**: Al hacer push a main

## 📄 Licencia

Proyecto personal - Roberto Caamaño Riquelme

## 📞 Contacto

- **Email**: raristides.caamano@gmail.com
- **Phone**: +56 9 4297 1899
- **GitHub**: [robertocaamanor](https://github.com/robertocaamanor)
- **Portfolio**: [robertocaamanor.github.io](https://robertocaamanor.github.io)

---

**Actualizado:** Septiembre 2025 - v2.0 con CV Dinámico
