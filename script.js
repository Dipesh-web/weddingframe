// ==== NAVBAR SCROLL EFFECT ====
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==== TOGGLE MOBILE MENU ====
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// ==== INIT AOS ANIMATION ====
AOS.init({
  duration: 1000,
  once: true,
});

// Lightbox is automatically initialized by its own script
