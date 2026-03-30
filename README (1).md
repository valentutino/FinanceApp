# 📈 Portfolio Dashboard

Dashboard de portafolio conectado a Google Sheets con precios en vivo.

---

## 🚀 Deploy en Vercel (10 minutos)

### Paso 1 — Subir a GitHub

1. Creá un repositorio nuevo en GitHub (puede ser privado)
2. Subí los archivos:
   - `index.html`
   - `README.md`
3. Listo

### Paso 2 — Deploy en Vercel

1. Entrá a [vercel.com](https://vercel.com)
2. "Add New Project"
3. Importá tu repositorio de GitHub
4. Framework Preset: **Other**
5. Root Directory: `.` (raíz)
6. Hacé click en **Deploy**
7. En ~30 segundos tenés tu URL: `tu-portfolio.vercel.app`

---

## 📊 Configurar Google Sheets (opcional pero recomendado)

### Paso 1 — Crear la Sheet

1. Creá una Google Sheet nueva
2. Creá estas 4 hojas (tabs): `IOL`, `Tastytrade`, `Crypto`, `Config`
3. Copiá la estructura de `SHEET_STRUCTURE.md`

### Paso 2 — Apps Script

1. En la Sheet: **Extensions → Apps Script**
2. Borrá el código existente
3. Pegá el contenido de `APPS_SCRIPT.gs`
4. Guardá (Ctrl+S)

### Paso 3 — Deployar el Script

1. Hacé click en **Deploy → New deployment**
2. Tipo: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Hacé click en **Deploy**
6. Copiá la URL que te da (algo como `https://script.google.com/macros/s/ABC.../exec`)

### Paso 4 — Conectar al Dashboard

1. Abrí tu dashboard en Vercel
2. Hacé click en ⚙️ (esquina superior derecha)
3. Pegá la URL del Apps Script
4. Actualizá el MEP
5. Guardá

---

## ✏️ Actualizar posiciones

Cada vez que operés, simplemente actualizás la Google Sheet:
- Cambiás la cantidad
- Actualizás el precio de entrada
- El dashboard se actualiza solo al recargar

---

## 📱 Sin Google Sheet

El dashboard funciona igual sin configurar la Sheet — usa las posiciones hardcodeadas como fallback. Podés actualizar esas posiciones editando el archivo `index.html` directamente y haciendo commit al repositorio (Vercel re-deployea automáticamente).

---

## 🔄 Actualización automática de Vercel

Cada vez que hacés un commit al repositorio de GitHub, Vercel re-deployea automáticamente en ~30 segundos. Cero configuración adicional.
