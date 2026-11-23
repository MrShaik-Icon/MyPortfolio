// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";
    });
});


// ==========================================
// CURRENT YEAR
// ==========================================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==========================================
// PERSONAL CONTACT DETAILS
// ==========================================

const email = "sk.khwazaicon@gmail.com";

const linkedin =
    "https://www.linkedin.com/in/shaik-khawza-99566414b/";

const github =
    "https://github.com/MrShaik-Icon";


// EMAIL
const emailLink = document.getElementById("emailLink");

if (emailLink) {
    emailLink.href = `mailto:${email}`;
    emailLink.querySelector("b").textContent = email;
}


// LINKEDIN
const linkedinLink =
    document.getElementById("linkedinLink");

if (linkedinLink) {
    linkedinLink.href = linkedin;
}


// GITHUB
const githubLink =
    document.getElementById("githubLink");

if (githubLink) {
    githubLink.href = github;
    githubLink.querySelector("b").textContent =
        "github.com/MrShaik-Icon";
}


// CONTACT BUTTON
const contactButton =
    document.getElementById("contactButton");

if (contactButton) {
    contactButton.href = `mailto:${email}`;
}


// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    ".section, .section-title, .about-card, .skill, " +
    ".experience-card, .featured-cert, .cert-card, " +
    ".project-card, .highlight-card, .contact-card"
);


// Different animation styles for each section
const animationStyles = {
    about: "reveal-left",
    skills: "reveal-zoom",
    experience: "reveal-right",
    certifications: "reveal-flip",
    projects: "reveal-up",
    highlights: "reveal-left",
    contact: "reveal-zoom"
};


// Apply animation styles
Object.keys(animationStyles).forEach(sectionId => {

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add(
            animationStyles[sectionId]
        );
    }

});


// ==========================================
// INTERSECTION OBSERVER
// ==========================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -40px 0px"
};

const observer = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    observerOptions
);


// Observe elements
revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


// ==========================================
// STAGGERED ANIMATIONS
// ==========================================

const staggerGroups = [
    ".skill",
    ".cert-card",
    ".project-card",
    ".highlight-card",
    ".contact-card"
];

staggerGroups.forEach(selector => {

    const elements = document.querySelectorAll(selector);

    elements.forEach((element, index) => {

        element.style.transitionDelay =
            `${index * 100}ms`;

    });

});


// ==========================================
// HERO SECTION ANIMATION
// ==========================================

window.addEventListener("load", () => {

    const heroElements = document.querySelectorAll(
        ".hero h1, .hero h2, .hero p, .hero .btn, .hero img"
    );

    heroElements.forEach((element, index) => {

        element.style.animation =
            `fadeInUp 0.8s ease forwards`;

        element.style.animationDelay =
            `${index * 150}ms`;

    });

});

function openContactModal() {
    document.getElementById("contactModal")
        .classList.add("active");
}

function closeContactModal() {
    document.getElementById("contactModal")
        .classList.remove("active");
}

// Close popup when clicking outside
document.getElementById("contactModal")
    .addEventListener("click", function(e) {
        if (e.target === this) {
            closeContactModal();
        }
    });

// Close popup using Escape key
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        closeContactModal();
    }
});