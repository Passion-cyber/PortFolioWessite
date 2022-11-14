const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const navContainer = document.querySelector("nav");

openButton.addEventListener("click", () => {
  navContainer.classList.add("open-nav");
});

closeButton.addEventListener("click", () => {
  navContainer.classList.remove("open-nav");
});


//Scroll Reaveal
window.sr = ScrollReveal();
sr.reveal(".logo", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal("nav li", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".open-btn", {
  duration: 2000,
  origin: "top",
  distance: "100px",
});

sr.reveal(".hero-text-wrapper", {
  duration: 2000,
  origin: "left",
  distance: "300px",
});

sr.reveal(".hero-image-wrapper", {
  duration: 2000,
  origin: "right",
  distance: "300px",
});

sr.reveal(".services-text", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".services", {
  duration: 2000,
  origin: "bottom",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".section-1", {
  duration: 2000,
  origin: "bottom",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".wrap-left", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".wrap-right", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".individual-items", {
  duration: 2000,
  origin: "bottom",
  viewFactor: 0.2,
  distance: "100px",
});

sr.reveal(".contact-text", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.2,
  distance: "300px",
});

sr.reveal(".contact-button", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.2,
  distance: "300px",
});

sr.reveal(".footer-logo", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.2,
  distance: "300px",
});

sr.reveal(".footer-nav", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".footer-icons", {
  duration: 2000,
  origin: "left",
  viewFactor: 0.2,
  distance: "300px",
});

sr.reveal(".title", {
  duration: 2000,
  origin: "right",
  viewFactor: 0.2,
  distance: "200px",
});

sr.reveal(".hero-resume", {
  duration: 2000,
  origin: "bottom",
  delay: 1000,
  distance: "50px",
  easing: "ease-in-out",
});

// Smooth Scrolling Effect On Navbar
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
