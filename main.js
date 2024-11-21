document.addEventListener("DOMContentLoaded", () => {
  const heroSection = document.querySelector('.hero');
  heroSection.style.opacity = 0;
  setTimeout(() => {
    heroSection.style.transition = "opacity 2s";
    heroSection.style.opacity = 1;
  }, 500);
});
