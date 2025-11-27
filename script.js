// Configura aquí tus datos
const BUSINESS = {
  name: "Hierfor-Inox",
  phone: "+52 3338148142", // Reemplaza con tu número real en formato internacional: +52...
  whatsappMessage: "Hola, me interesa una cotización. Vengo de la página web."
};

// Utilidades
function waLink(text) {
  const phone = BUSINESS.phone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEls = document.querySelectorAll("#year");
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  // Botones de WhatsApp
  const cta = document.getElementById("ctaWhatsapp");
  if (cta) cta.href = waLink(BUSINESS.whatsappMessage);
  const cta2 = document.getElementById("ctaCotizar");
  if (cta2) cta2.href = waLink("Hola, me gustaría una cotización rápida.");
  const fab = document.getElementById("fabWhatsapp");
  if (fab) fab.href = waLink("Hola, ¿me apoyas por WhatsApp?");

  const waLinkEl = document.getElementById("waLink");
  if (waLinkEl) waLinkEl.href = waLink("Hola, me interesa una cotización.");

  // Grid de proyectos demo
  // Añadir imágenes: copia tus archivos en la carpeta `assets/` y añade un objeto
  // como este al array de abajo. Ejemplo:
  // { title: "Mi proyecto", img: "assets/mi-imagen.jpg", tags: ["Herrería"] }
  // El contenedor con id="gridProyectos" será rellenado dinámicamente.
  const proyectos = [
    {title:"Barandal de herrería", img:"assets/21527fa8-4cda-4e35-bff1-9cbf9655e027.jpg", tags:["Herrería"]},
    {title:"Escalera de vidrio templado", img:"assets/9ddc9754-20f6-428b-a4d5-16d4bee9f7ad.jpg", tags:["Vidrio templado"]},
    {title:"Ventanas de aluminio", img:"assets/73284035-6e7e-4127-8444-06f40361f8c5.jpg", tags:["Aluminio"]},
    {title:"Puerta metálica", img:"assets/6a4f43c1-7d42-4025-9e11-151731b66a8b.jpg", tags:["Herrería"]},
    {title:"Fachada con vidrio", img:"assets/770fdff9-09c9-4d08-9c48-4aab228b8eb6.jpg", tags:["Vidrio templado"]},
    {title:"Trabajos personalizados", img:"assets/d39fa29e-c7c3-4e90-9fa2-2917912770e2.jpg", tags:["Aluminio"]},
  ];
  const grid = document.getElementById("gridProyectos");
  if (grid) {
    grid.innerHTML = proyectos.map(p => `
      <div class="col-md-4">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${p.title}" loading="lazy">
          <div class="card-body">
            <h3 class="h6 mb-1">${p.title}</h3>
            <span class="badge text-bg-secondary">${p.tags[0]}</span>
          </div>
        </div>
      </div>
    `).join("");
  }

  // CTA en la página de contacto (Option A): si existe el botón, asignamos un mensaje predefinido
  const ctaContactPage = document.getElementById("ctaContactPage");
  if (ctaContactPage) ctaContactPage.href = waLink("Hola, quisiera información y una cotización. Vengo desde la página web.");
});