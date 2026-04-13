// Smooth Scroll
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Fade-in on scroll
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
});