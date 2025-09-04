# Configuración de GitHub Pages con Variables de Entorno

## 🚀 Deploy Automático con GitHub Actions

### 1. Configurar permisos en GitHub
Ve a tu repositorio: `https://github.com/robertocaamanor/robertocaamanor.github.io`

1. **Settings** → **Actions** → **General**
2. **En "Workflow permissions"**:
   - ✅ Selecciona **"Read and write permissions"**
   - ✅ Marca **"Allow GitHub Actions to create and approve pull requests"**
3. **Haz clic en "Save"**

### 2. Configurar GitHub Pages
1. **Settings** → **Pages**
2. **Source**: **GitHub Actions** (no "Deploy from a branch")
3. **Guardar cambios**

### 3. Configurar Secrets de EmailJS
1. **Settings** → **Secrets and variables** → **Actions**
2. **"New repository secret"** para cada uno:

```
VITE_EMAILJS_SERVICE_ID = service_dkeeyyn
VITE_EMAILJS_TEMPLATE_ID = service_dkeeyyn  
VITE_EMAILJS_PUBLIC_KEY = xU3yiCNKm9TM2Vnht
VITE_EMAIL_TO = raristides.caamano@gmail.com
```

### 4. Activar el deploy
- **El workflow se ejecutará automáticamente** después del próximo push
- **O puedes ir a Actions** y ejecutar manualmente el workflow

---

## 🛠️ Alternativa: Deploy Manual

```bash
npm run build-and-deploy
```

---

## ✅ Troubleshooting

### Error 403 - Permission denied
- ✅ **Solucionado**: Workflow actualizado con permisos correctos
- ✅ **Configurar**: Permisos en Settings → Actions → General

### Variables de entorno no funcionan
- Verificar que los secrets estén configurados en GitHub
- Los nombres deben coincidir exactamente

---

## 🔗 URL final
**https://robertocaamanor.github.io**

¡Tu portafolio se desplegará automáticamente! 🚀
