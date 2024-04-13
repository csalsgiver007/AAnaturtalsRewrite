//Constants for the article section elements

const introEl = document.getElementById("intro");
const productsEl = document.getElementById("products");
const eventsEl = document.getElementById("events");
const newsEl = document.getElementById("news-article-section");

// Functions to render and hide the article sections

function renderIntro() {
  document.getElementById("header").style.display = "none";
  document.getElementById("intro").style.display = "flex";
  window.scrollTo(0, 0);
  history.pushState({ page: 2 }, null, "");
}
function closeIntro() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("header").style.display = "grid";
  window.scrollTo(0, 0);
}
function renderProducts() {
  document.getElementById("header").style.display = "none";
  document.getElementById("products").style.display = "flex";
  window.scrollTo(0, 0);
  history.pushState({ page: 2 }, null, "");
}
function closeProducts() {
  document.getElementById("products").style.display = "none";
  document.getElementById("header").style.display = "grid";
  window.scrollTo(0, 0);
}
function renderEvents() {
  document.getElementById("header").style.display = "none";
  document.getElementById("events").style.display = "flex";
  window.scrollTo(0, 0);
  history.pushState({ page: 2 }, null, "");
}
function closeEvents() {
  document.getElementById("events").style.display = "none";
  document.getElementById("header").style.display = "grid";
  window.scrollTo(0, 0);
}
function renderNews() {
  document.getElementById("header").style.display = "none";
  document.getElementById("news-article-section").style.display = "flex";
  window.scrollTo(0, 0);
  history.pushState({ page: 2 }, null, "");
}
function closeNews() {
  document.getElementById("news-article-section").style.display = "none";
  document.getElementById("header").style.display = "grid";
  window.scrollTo(0, 0);
}

// Event listeners for the buttons

document.addEventListener("click", function (e) {
  if (e.target.id === "intro-btn") renderIntro();
  else if (e.target.id === "intro-close") closeIntro();
  else if (e.target.id === "products-btn") renderProducts();
  else if (e.target.id === "products-close") closeProducts();
  else if (e.target.id === "events-btn") renderEvents();
  else if (e.target.id === "events-close") closeEvents();
  else if (e.target.id === "news-btn") renderNews();
  else if (e.target.id === "news-close") closeNews();
});

// Event listener to close the article sections when the back button is clicked

window.addEventListener("popstate", function (event) {
  if (introEl.style.display === "flex") closeIntro();
  else if (productsEl.style.display === "flex") closeProducts();
  else if (eventsEl.style.display === "flex") closeEvents();
  else if (newsEl.style.display === "flex") closeNews();
});
