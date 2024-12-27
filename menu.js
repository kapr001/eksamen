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

document.querySelectorAll("#menu1 a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Forhindrer scroll
    const tabName = this.getAttribute("data-tab");

    // Fjern "active" fra alle tabs
    document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));

    // Aktivér den valgte tab
    document.querySelector(`.tab-content[data-tab="${tabName}"]`).classList.add("active");

    // Tilføj "active" til det korrekte tab-indhold
    tabs[index].classList.add("active");
  });
});

// Find alle links og tab-indhold
const links = document.querySelectorAll("#menu1 a");
const tabs = document.querySelectorAll(".tab-content");

// Tilføj klik-hændelse til hvert link
links.forEach((link, index) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Forhindrer scroll

    // Fjern "active" fra alle links
    links.forEach((link) => link.classList.remove("active"));

    // Tilføj "active" til det link, der blev klikket
    link.classList.add("active");

    // Fjern "active" fra alle tabs
    tabs.forEach((tab) => tab.classList.remove("active"));

    // Tilføj "active" til det korrekte tab-indhold
    tabs[index].classList.add("active");
  });
});
