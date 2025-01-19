document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const buttons = document.querySelectorAll('.nav-links button');

    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`[onclick="scrollToSection('${sectionId}')"]`);
    activeButton.classList.add('active');

    if (section) {
        const offset = 50; 
        const sectionTop = section.offsetTop;

        window.scrollTo({
            top: sectionTop - offset,
            behavior: 'smooth'
        });
    }
}
const nameText = "Ghomari Djazia"; // Text to be typed
const typedNameElement = document.getElementById("typed-name");
const cursorElement = document.querySelector(".cursor");

let index = 0;

function typeName() {
  if (index < nameText.length) {
    typedNameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 100); 
  } else {
    setTimeout(() => {
      typedNameElement.textContent = ""; 
      index = 0; 
      typeName(); 
    }, 1000); 
  }
}

typeName();
