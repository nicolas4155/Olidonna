// --- FORMULARIO MAYORISTA ---
document.getElementById('form-mayorista').onsubmit = function (e) {
  e.preventDefault();
  const nombre = this.nombre.value.trim();
  const email = this.email.value.trim();
  const mensaje = this.mensaje.value.trim();

  const texto = encodeURIComponent(
    `Hola, soy ${nombre}.\nEmail: ${email}\n\nMensaje:\n${mensaje}`
  );

  const telefono = "5491140306009"; // formato internacional
  window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
};

// --- MENÚ MOBILE ---
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('show');
}

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('show');
  });
});

// --- SLIDER DE PRODUCTOS ---
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const totalItems = slider.children.length;

// Duplicar elementos para efecto infinito
slider.innerHTML += slider.innerHTML;

let currentIndex = 0;
let itemWidth = slider.children[0].offsetWidth;

function updateSliderPosition() {
  slider.style.transition = 'transform 0.5s ease';
  slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

function slideNext() {
  if (currentIndex < totalItems) {
    currentIndex++;
  } else {
    slider.style.transition = 'none';
    currentIndex = 0;
    slider.style.transform = `translateX(0px)`;
    setTimeout(() => {
      currentIndex++;
      updateSliderPosition();
    }, 50);
    return;
  }
  updateSliderPosition();
}

function slidePrev() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    slider.style.transition = 'none';
    currentIndex = totalItems;
    slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    setTimeout(() => {
      currentIndex--;
      updateSliderPosition();
    }, 50);
    return;
  }
  updateSliderPosition();
}

nextBtn.addEventListener('click', slideNext);
prevBtn.addEventListener('click', slidePrev);

// Auto-slide cada 4s
setInterval(slideNext, 4000);

// Ajustar ancho en resize
window.addEventListener('resize', () => {
  itemWidth = slider.children[0].offsetWidth;
  updateSliderPosition();
});

// --- CAROUSEL FOTOS (si existe en HTML) ---
let fotoIndex = 0;
function showFotos() {
  const slides = document.querySelectorAll("#carrusel-fotos .slide");
  if (!slides.length) return;

  slides.forEach(slide => slide.style.display = "none");

  fotoIndex++;
  if (fotoIndex > slides.length) { fotoIndex = 1 }

  slides[fotoIndex - 1].style.display = "block";
  slides[fotoIndex - 1].classList.add("fade");

  setTimeout(showFotos, 4000);
}
showFotos();
