const nav = document.querySelector(".nav");
const all = document.querySelector(".all");
const close = document.querySelector(".close");
const dim = document.querySelector(".dim");

function onEvent() {
  nav.classList.add("on");
  dim.style.display = "block";
}

function closeEvent() {
  nav.classList.remove("on");
  dim.style.display = "none";
}

all.addEventListener("click", onEvent);
close.addEventListener("click", closeEvent);
