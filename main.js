const images = [
  "assets/maria.jpg",
  "assets/maria.jpg",
  "assets/maria.jpg",
  "assets/maria.jpg",
];
const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis nemo at numquam aperiam commodi inventore doloremque, deserunt deleniti ipsam.",
    author: "Maria de Almeida",
    job: "Senior Product Manager at EDP Comercial",
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    author: "João da Silva",
    job: "Software Engineer at ABC Tech",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    author: "Ana Pereira",
    job: "Graphic Designer at XYZ Studio",
  },
  {
    text: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
    author: "Carlos Souza",
    job: "Marketing Specialist at DEF Corp",
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
