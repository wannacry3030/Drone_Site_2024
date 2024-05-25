const images = [
  "assets/farmer.png",
  "assets/photo.png",
  "assets/maria.jpg",
  "assets/engi.png",
];
const testimonials = [
  {
    text: "Nossa empresa decidiu usar os drones desta empresa para monitorar nossas operações agrícolas e ficamos extremamente satisfeitos com a qualidade e precisão dos resultados. Recomendamos fortemente!",
    author: "Luiza Santos",
    job: "CEO at AgroTech Solutions",
  },
  {
    text: "Como fotógrafo profissional, confio nos drones desta empresa para capturar imagens aéreas incríveis dos meus clientes. São fáceis de usar e produzem resultados impressionantes!",
    author: "Pedro Oliveira",
    job: "Owner of Oliveira Photography",
  },
  {
    text: "A logística da nossa empresa melhorou consideravelmente desde que começamos a utilizar os drones daqui. Eles nos ajudam a monitorar estoques e fazer entregas mais rápidas e eficientes.",
    author: "Fernanda Costa",
    job: "Operations Manager at Speedy Logistics",
  },
  {
    text: "A precisão e a estabilidade dos drones desta empresa são incomparáveis. Como engenheiro civil, confio neles para inspecionar locais de construção e obter dados precisos para nossos projetos.",
    author: "Rafael Silva",
    job: "Civil Engineer at BuildTech",
  },
];

let currentIndex = 0;
let interval;

const imageElement = document.querySelector(".carousel-image");
const textElement = document.querySelector(".testimonial-text");
const authorElement = document.querySelector(".testimonial-author");
const jobElement = document.querySelector(".testimonial-job");
const dots = document.querySelectorAll(".dot");

function updateCarousel(index) {
  imageElement.src = images[index];
  textElement.textContent = testimonials[index].text;
  authorElement.textContent = testimonials[index].author;
  jobElement.textContent = testimonials[index].job;

  dots.forEach((dot) => dot.classList.remove("dot--fill"));
  dots[index].classList.add("dot--fill");
}

function startAutoSlide() {
  interval = setInterval(() => {
    currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    updateCarousel(currentIndex);
  }, 5000); // Muda de slide a cada 3 segundos
}

function stopAutoSlide() {
  clearInterval(interval);
}

document.querySelector(".btn--left").addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
  stopAutoSlide();
  startAutoSlide();
});

document.querySelector(".btn--right").addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateCarousel(currentIndex);
  stopAutoSlide();
  startAutoSlide();
});

dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    currentIndex = parseInt(e.target.dataset.index);
    updateCarousel(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });
});

updateCarousel(currentIndex);
startAutoSlide();
