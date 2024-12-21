const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// JavaScript til kontinuerlig og sømløs scrolling CHATGPT
const scrollContent = document.getElementById("scroll-content");
let scrollAmount = 0;

function autoScroll() {
  // Flyt indholdet lidt til venstre
  scrollAmount -= 1; // Juster hastigheden her
  scrollContent.style.transform = `translateX(${scrollAmount}px)`;

  // Når halvdelen af indholdet er scrollet væk, nulstil positionen
  if (Math.abs(scrollAmount) >= scrollContent.scrollWidth / 2) {
    scrollAmount = 0;
  }

  // Fortsæt animationen
  requestAnimationFrame(autoScroll);
}

// Start scrolling, når siden er indlæst
window.onload = () => {
  autoScroll();
};

const tekstElement = document.querySelector(".tekst");
