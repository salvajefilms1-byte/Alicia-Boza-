# Alicia Boza — Portafolio Web v3
## Realizadora Multidisciplinaria · Lima, Perú

---

## Estructura de archivos

```
alicia-boza/
├── index.html    ← Contenido, textos y estructura
├── style.css     ← Todo el diseño visual y colores
├── script.js     ← Animaciones e interacciones
├── images/       ← PON AQUÍ todas tus imágenes
├── assets/       ← Favicon y otros recursos
└── README.md     ← Esta guía
```

Para abrir localmente: doble clic en `index.html`

---

## Publicar el sitio

### Netlify — opción más fácil (gratis)
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta gratuita
2. Arrastra la carpeta `alicia-boza/` al panel de Netlify
3. En segundos tendrás una URL: `alicia-boza.netlify.app`
4. Para poner tu dominio propio: Settings → Domain management

### GitHub Pages (gratis)
1. Crea cuenta en [github.com](https://github.com)
2. Nuevo repositorio → sube todos los archivos
3. Settings → Pages → Branch: main → Save
4. Tu sitio quedará en: `tuusuario.github.io/nombre-repo`

### Hosting con dominio propio
1. Contrata hosting + dominio (Hostinger, Namecheap, GoDaddy)
2. Sube los archivos a `public_html/` usando FileZilla (FTP gratuito)

---

## Cambiar imágenes

**Paso 1:** Coloca tus fotos en la carpeta `/images/`

**Paso 2:** En `index.html` busca los comentarios `*** REEMPLAZA: src="images/..." ***`

**Paso 3:** Sustituye la URL por tu imagen local:
```html
<!-- ANTES (imagen temporal) -->
<img src="https://static.wixstatic.com/.../imagen.jpg" alt="Fotografía"/>

<!-- DESPUÉS (tu imagen real) -->
<img src="images/fotografia-portada.jpg" alt="Fotografía"/>
```

**Paso 4:** En `script.js`, en el array `PROYECTOS`, cambia también el campo `img` de cada proyecto:
```javascript
img: 'images/foto-postpro-modal.jpg',
```

### Tamaños recomendados

| Sección | Tamaño ideal | Formato |
|---------|-------------|---------|
| Hero imagen grande (hg-a) | 1400 × 900 px | JPG 85% |
| Hero imágenes pequeñas (hg-b, hg-c) | 800 × 520 px | JPG 80% |
| Preview en lista Trabajos | 600 × 420 px | JPG 75% |
| Modal (imagen ampliada) | 1400 × 788 px | JPG 85% |
| Retrato Sobre mí | 520 × 700 px | JPG 80% |

**Comprimir imágenes antes de subir:**
- [squoosh.app](https://squoosh.app) — en el navegador, sin instalar nada
- [tinypng.com](https://tinypng.com) — PNG y JPG

---

## Cambiar textos

Todos los textos tienen comentarios `*** CAMBIA ... ***` en `index.html`.

| Qué cambiar | Dónde buscarlo |
|-------------|----------------|
| Título de la pestaña del navegador | `<title>` en el `<head>` |
| Nombre en el logo del nav | `.nav-logo` |
| Nombre enorme del hero | `<h1 class="hero-name">` |
| Rol profesional | `.hs-rol` |
| Ciudad | `.hs-lugar` |
| Disciplinas (hero) | `.hs-frase` |
| Texto "Sobre mí" (bio) | `.sobre-bio` |
| Formación académica | `.sobre-form` |
| Datos de contacto (email, teléfono, redes) | `.sobre-datos` y `.ct-links` |
| Frase de contacto | `.ct-desc` |
| Redes en el footer | `.footer-redes` |
| Copyright | `.footer-copy` |

### Cambiar los datos del modal de cada proyecto
Abre `script.js` y edita el array `PROYECTOS`. Cada objeto tiene:
```javascript
{
  titulo: 'Nombre del proyecto',
  cat: 'Subtítulo / descripción breve',
  año: '2024',
  credito: 'Crédito o autoría',
  desc: 'Descripción completa que se muestra en el modal.',
  img: 'images/mi-imagen.jpg',   // ← imagen en el modal
  tech: 'Software y técnica utilizada'
}
```

---

## Cambiar colores

Abre `style.css` → sección `1. VARIABLES` al inicio del archivo:

```css
:root {
  --negro:   #080808;   /* Fondo principal — negro total */
  --blanco:  #F4F2EE;   /* Texto sobre negro */
  --rojo:    #CC2222;   /* Color de acento ← cambia este */
  --crema:   #EEEbE4;   /* Fondo secciones Sobre mí y Skills */
  --gris-3:  #666666;   /* Texto secundario */
}
```

**Para cambiar el acento rojo por otro color**, solo cambia `--rojo` y `--rojo-d`:
```css
/* Ejemplo: azul petróleo */
--rojo:   #1A3A8F;
--rojo-d: #0D2260;

/* Ejemplo: verde esmeralda */
--rojo:   #0A7A4A;
--rojo-d: #055230;

/* Ejemplo: naranja quemado */
--rojo:   #C4612B;
--rojo-d: #7A3A18;
```

---

## Cambiar tipografías

**Paso 1 — Elige tus fuentes** en [fonts.google.com](https://fonts.google.com)

**Paso 2 — En `index.html`**, reemplaza el enlace de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=TU+DISPLAY&family=TU+SERIF:ital,wght@...&family=TU+SANS:wght@...&display=swap" rel="stylesheet"/>
```

**Paso 3 — En `style.css`**, actualiza las variables:
```css
--t-display: 'Tu Fuente Display', sans-serif; /* Nombre gigante */
--t-serif:   'Tu Fuente Serif', serif;         /* Títulos editoriales */
--t-sans:    'Tu Fuente Sans', sans-serif;      /* Textos normales */
```

**Alternativas para el nombre enorme (estilo impacto):**
- `Bebas Neue` ← la que se usa ahora
- `Anton` — muy bold, gratuita
- `Oswald` — condensada y elegante
- `Black Han Sans` — expresiva

---

## Agregar proyectos

### En `index.html` — nueva fila en la lista:
```html
<div class="tr-fila" data-cat="CATEGORIA" data-idx="11">
  <div class="tr-fila-inner">
    <span class="tr-num">12</span>
    <div class="tr-info">
      <h3 class="tr-nombre">Nombre del Proyecto</h3>
      <p class="tr-sub">Descripción breve · Subtítulo</p>
    </div>
    <span class="tr-cat-tag">Categoría</span>
    <span class="tr-yr">2024</span>
    <span class="tr-flecha">→</span>
  </div>
  <div class="tr-preview">
    <img src="images/mi-preview.jpg" alt="Preview"/>
  </div>
</div>
```

`data-cat` válidos: `fotografia` · `audiovisual` · `diseno` · `ilustracion`
`data-idx` debe ser el siguiente número en el array de `PROYECTOS` en `script.js`

### En `script.js` — agregar al array PROYECTOS:
```javascript
/* 11 */ {
  titulo: 'Nombre del Proyecto',
  cat: 'Subtítulo descriptivo',
  año: '2024',
  credito: 'Crédito: Alicia Boza',
  desc: 'Descripción completa para el modal.',
  img: 'images/mi-imagen-modal.jpg',
  tech: 'Herramientas utilizadas'
}
```

### Agregar un filtro nuevo:
En `index.html` dentro de `.tr-filtros`:
```html
<button class="fb" data-f="nueva-categoria">Mi Categoría</button>
```

---

## Activar el formulario de contacto

El formulario simula el envío. Para recibir emails reales:

### Formspree — más fácil (gratis, 50 emails/mes)
1. Ve a [formspree.io](https://formspree.io) y crea cuenta
2. New Form → copia tu código (ej: `xabcdef1`)
3. En `index.html`, modifica el `<form>`:
```html
<form id="formulario" class="ct-form" data-reveal novalidate
      action="https://formspree.io/f/xabcdef1" method="POST">
```
4. En `script.js` dentro de `initFormulario()`, reemplaza el `setTimeout` por:
```javascript
form.submit();
```

### EmailJS — sin backend (gratis, 200 emails/mes)
1. Crea cuenta en [emailjs.com](https://emailjs.com)
2. Conecta tu cuenta de Gmail
3. Agrega antes de `</body>` en `index.html`:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>emailjs.init('TU_PUBLIC_KEY');</script>
```
4. En `script.js`, reemplaza el `setTimeout` por:
```javascript
emailjs.sendForm('TU_SERVICE_ID', 'TU_TEMPLATE_ID', form)
  .then(() => {
    form.reset();
    btn.querySelector('span').textContent = 'Enviar mensaje';
    btn.disabled = false;
    ok?.classList.add('show');
    setTimeout(() => ok?.classList.remove('show'), 5000);
  })
  .catch(err => console.error('Error EmailJS:', err));
```

---

## Agregar favicon (ícono de la pestaña)

1. Crea un ícono 32×32 px y guárdalo como `images/favicon.png`
2. Agrega en el `<head>` de `index.html`:
```html
<link rel="icon" type="image/png" href="images/favicon.png"/>
```

---

## Checklist antes de publicar

- [ ] Reemplazar todas las imágenes temporales (Unsplash/Wix) por las tuyas
- [ ] Comprimir imágenes (máx. 300 KB por archivo)
- [ ] Actualizar email: `aliciasofiaboza@gmail.com` ✓
- [ ] Actualizar teléfono: `(+51) 983 922 099` ✓
- [ ] Verificar link de Instagram: `@alicia_boza_` ✓
- [ ] Verificar link de LinkedIn ✓
- [ ] Activar formulario (Formspree o EmailJS)
- [ ] Agregar favicon
- [ ] Probar en móvil antes de publicar
- [ ] Revisar en Chrome, Safari y Firefox

---

## Compatibilidad

| Navegador | Estado |
|-----------|--------|
| Chrome 90+ | ✓ Completo |
| Firefox 88+ | ✓ Completo |
| Safari 14+ | ✓ Completo |
| Chrome Mobile | ✓ Responsive |
| Safari iOS 14+ | ✓ Responsive |

El cursor personalizado se desactiva automáticamente en dispositivos táctiles.

---

*Alicia Boza · Realizadora Multidisciplinaria*
*Lima, Perú · aliciasofiaboza@gmail.com · (+51) 983 922 099*
*Instagram: @alicia_boza_ · LinkedIn: Alicia Boza Ontaneda*
