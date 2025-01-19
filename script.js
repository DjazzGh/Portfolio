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
