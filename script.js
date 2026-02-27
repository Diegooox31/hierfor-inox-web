const BUSINESS = {
  name: "Hierfor-Inox",
  phone: "+52 3338148142",
  whatsappMessage: "Hola, me interesa una cotización. Vengo de la página web."
};

function waLink(text) {
  const phone = BUSINESS.phone.replace(/\D/g, "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

// 1. LA FUNCIÓN DEBE ESTAR AFUERA (Scope Global)
function cambiarImagen(element) {
    const srcOriginal = element.getAttribute('src');
    const textoOriginal = element.getAttribute('alt');
    document.getElementById('modalImg').src = srcOriginal;
    document.getElementById('modalTitle').innerText = textoOriginal;
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEls = document.querySelectorAll("#year");
  yearEls.forEach(el => el.textContent = new Date().getFullYear());

  const cta2 = document.getElementById("ctaCotizar");
  if (cta2) cta2.href = waLink("Hola, me gustaría una cotización rápida.");

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
          <img src="${p.img}" 
               class="card-img-top" 
               alt="${p.title}" 
               data-bs-toggle="modal" 
               data-bs-target="#proyectoModal" 
               onclick="cambiarImagen(this)"
               style="cursor:pointer">
          <div class="card-body">
            <h3 class="h6 mb-1">${p.title}</h3>
            <span class="badge text-bg-secondary">${p.tags[0]}</span>
          </div>
        </div>
      </div>
    `).join("");
  }
});

// === JAVASCRIPT PARA GALERÍA DINÁMICA ===

// Función para filtrar la galería
function filtrarGaleria(categoria) {
  // Seleccionar todos los elementos de la galería
  const items = document.querySelectorAll('.item-galeria');
  
  // Mostrar u ocultar según categoría
  items.forEach(item => {
    if (categoria === 'todos' || item.classList.contains(categoria)) {
      item.classList.remove('d-none'); // Muestra
    } else {
      item.classList.add('d-none');    // Oculta (clase de Bootstrap)
    }
  });

  // Manejar estado activo de botones
  const container = document.getElementById("btnContainerGaleria");
  if(container) {
    const btns = container.getElementsByClassName("btn");
    for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove("active"); // Quita active a todos
    }
  }
  // Añade active al botón clickeado (necesitamos el evento para esto más limpio, 
  // pero esta forma directa funciona por ahora).
  event.target.classList.add("active");
}

// === CÓDIGO PARA VINCULAR GALERÍA AL MODAL EXISTENTE ===
// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const proyectoModal = document.getElementById('proyectoModal');
    
    if (proyectoModal) {
      // Usamos delegación de eventos en las imágenes dinámicas
      const galeriaGrid = document.querySelector('#galeria-trabajos .row');
      if (galeriaGrid) {
        galeriaGrid.addEventListener('click', function(event) {
          if (event.target.classList.contains('img-dynamic')) {
            const imageElement = event.target;
            const src = imageElement.getAttribute('src');
            const alt = imageElement.getAttribute('alt');
            
            const modalTitle = proyectoModal.querySelector('.modal-title');
            const modalBodyImg = proyectoModal.querySelector('#modalImg');

            modalTitle.textContent = alt;
            modalBodyImg.src = src;
            
            // Abrir el modal programáticamente usando Bootstrap
            const bsModal = new bootstrap.Modal(proyectoModal);
            bsModal.show();
          }
        });
      }
    }
});