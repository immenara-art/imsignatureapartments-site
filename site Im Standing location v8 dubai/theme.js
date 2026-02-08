// Thème sauvegardé (white / black)
const savedTheme = localStorage.getItem("theme") || "white";
document.documentElement.setAttribute("data-theme", savedTheme);

// Bouton de thème
window.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "white" ? "black" : "white";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }
});

// Préloader – cercle doré qui tourne
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;
  preloader.classList.add("preloader-hide");
  setTimeout(() => preloader.remove(), 600);
});

// Animations fade-up avec IntersectionObserver
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
});

// SLIDER DUBAI PREMIUM

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider");
  if (!slider) return;

  const slides = slider.querySelector(".slides");
  const slideItems = slider.querySelectorAll(".slide");
  const nextBtn = slider.querySelector(".next");
  const prevBtn = slider.querySelector(".prev");
  const dotsContainer = slider.querySelector(".slider-dots");

  let index = 0;

  // Create dots
  slideItems.forEach((_, i) => {
    const dot = document.createElement("div");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);

    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
  });

  const dots = dotsContainer.querySelectorAll("div");

  function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slideItems.length;
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slideItems.length) % slideItems.length;
    updateSlider();
  });
});
