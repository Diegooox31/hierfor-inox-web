# Herrería • Vidrio Templado • Aluminio — Starter
Sitio listo para editar para un negocio de **herrería, vidrio templado y aluminio**.

## Archivos
- `index.html` — Home con servicios y CTA a WhatsApp.
- `proyectos.html` — Grid de proyectos (imágenes demo).
- `contacto.html` — Formulario que abre WhatsApp con el mensaje prellenado.
- `styles.css` — Estilos.
- `script.js` — Configuración de WhatsApp y contenido dinámico.
- `/assets` — Logo, favicon e imágenes de muestra.

## Cómo personalizar
1. **Nombre y WhatsApp**: abre `script.js` y cambia:
   ```js
   phone: "+5215512345678" // tu número real en formato +52...
   ```
2. **Textos**: edita los `<h1>`, `<p>` y listas en `index.html`.
3. **Servicios**: ajusta las tarjetas en `index.html`.
4. **Proyectos (imágenes)**: coloca tus imágenes dentro de la carpeta `assets/` (ej. `assets/mi-proyecto.jpg`) y luego añade o edita una entrada en el arreglo `proyectos` dentro de `script.js`.

  Ejemplo de entrada para `script.js`:

  ```js
  { title: "Puerta metálica azul", img: "assets/mi-proyecto.jpg", tags: ["Herrería"] }
  ```

  - El HTML de proyectos se genera dinámicamente desde `script.js` y usa el `id="gridProyectos"` como contenedor.
  - Si prefieres no usar JavaScript, puedes editar directamente `proyectos.html` dentro del contenedor `id="gridProyectos"` y añadir tarjetas `<div class="col-md-4">...</div>` con `<img>`.
5. **Cobertura y horario**: en `contacto.html`.
6. **Mapa**: cambia el `src` del iframe de Google Maps por tu ubicación.

## Publicar GRATIS
- **GitHub Pages**:
  1) Crea un repo, sube estos archivos.
  2) En Settings → Pages, selecciona branch `main` y root `/`.
  3) Tu sitio quedará en `https://usuario.github.io/repo`.
- **Netlify (drop)**: entra a netlify.com → arrastra y suelta la carpeta.
- **Cloudflare Pages**: similar a Netlify.

## Formularios reales (opcional)
- **EmailJS**: envía correos sin backend. Requiere cuenta gratuita y una API key.
- **Netlify Forms**: añade `netlify` al `<form>` y un atributo `name`.
  
Nota: la página por defecto ahora usa un botón de WhatsApp en la página de contacto en lugar del formulario.

SEO y publicación en GitHub Pages
- Se agregaron archivos útiles para indexación: `robots.txt` y `sitemap.xml` en la raíz del proyecto.
- Añadí meta Open Graph y JSON-LD en `index.html` para mejorar la vista previa en redes y la detección como negocio local.

IMPORTANTE sobre la URL de GitHub Pages
- Si subes este sitio al repo renombrado `Diegooox31/hierfor-site`, la URL pública de GitHub Pages será:
  `https://Diegooox31.github.io/hierfor-site/` — ese nombre es el que aparecerá en la URL final.

Opciones para tener una URL más amigable:
  1) Renombrar el repo (recomendado si quieres cambiar sólo el texto final). En GitHub ve a Settings → Repository name → escribe el nuevo nombre (ej. `hierfor-site`) → Rename. Si ya lo renombraste, la URL pública quedará como `https://Diegooox31.github.io/hierfor-site/`.
  2) Crear un repo con nombre `Diegooox31.github.io` (este convierte tu sitio en página de usuario y la URL será `https://Diegooox31.github.io/`).
  3) Usar un dominio propio (ej. `hierfor-inox.com`) y configurarlo en Settings → Pages → Custom domain.

Si quieres, renombro las referencias (og:url y JSON-LD url) después de que me digas qué URL final vas a usar.
Si quieres volver a recibir mensajes desde la web (por correo) sin backend, puedes usar Formspree o EmailJS y te ayudo a configurarlo.
- **Google Forms**: enlaza un formulario y colócalo en un iframe.

## SEO básico
- Edita `<title>` y `meta description` en cada página.
- Nombra tus imágenes con palabras clave (ej. `barandal-herreria.jpg`).

¡Éxitos con el proyecto!
