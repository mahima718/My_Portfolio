// Typewriter Effect
const textArray = ["Mahima", "a content creator", "a tech explorer"];
let i = 0, j = 0, isDeleting = false;
let currentText = "", element = document.getElementById("typewriter-text");

function typeEffect() {
  if (!element) return;
  currentText = textArray[i]; 
  element.innerHTML = currentText.slice(0, j);

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % textArray.length;
    setTimeout(typeEffect, 300);
  } else {
    j += isDeleting ? -1 : 1;
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();

// Theme Toggle
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
