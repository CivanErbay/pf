// showSectionAnimation.js
export function checkScroll() {
  const sections = document.querySelectorAll(".scroll-hidden");

  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.45) {
      section.classList.add("visible");
    }
  });
}
