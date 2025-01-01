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

// CHAT GBT HAR HJULPET; KOMPETENCER, UDDANNELSE & ERFARING
// Find alle links og tab-indhold
const links = document.querySelectorAll("#menu1 a");
const tabs = document.querySelectorAll(".tab-content");

// Tilføj klik-hændelse til hvert link
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Forhindrer scroll

    // Fjern underscore efter klik
    links.forEach((link) => link.classList.remove("active"));

    // Tilføj underscore til det link, der blev klikket
    link.classList.add("active");

    // Fjern tekst fra alle tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Tilføj "active" til det korrekte tab-indhold
    tabs[index].classList.add("active");
  });
});

// BACK TO TOP KNAP MED W3 SCHOOLS
// Knappen hentes
let mybutton = document.getElementById("myBtn");

// Hvorår knap hentes
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Skroller til top v klik
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
