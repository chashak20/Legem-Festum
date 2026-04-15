// ===============================
// 🔗 SMOOTH SCROLL
// ===============================
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// ===============================
// 🔥 FADE-IN ANIMATION
// ===============================
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});


// ===============================
// 🍔 HAMBURGER MENU
// ===============================
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll("#nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            toggle.classList.remove("active");
        });
    });
}


// ===============================
// 🌄 BACKGROUND CHANGE ON SCROLL (ADD THIS AT LAST)
// ===============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
        ) {
            let bg = section.getAttribute("data-bg");

            if (bg) {
                document.body.style.background = `url(${bg}) no-repeat center/cover`;
            }
        }
    });
});