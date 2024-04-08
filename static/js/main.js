document.addEventListener("click", function (e) {
  if (e.target.id === "intro-btn") {
    document.getElementById("header").style.display = "none";
    document.getElementById("intro").style.display = "flex";
  } else if (e.target.id === "intro-close") {
    document.getElementById("intro").style.display = "none";
    document.getElementById("header").style.display = "grid";
  }
});
