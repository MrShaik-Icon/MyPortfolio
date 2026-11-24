// ==========================================
// MOBILE NAVIGATION
// ==========================================
/* Continuous left-to-right typing animation */
/* Start */
document.addEventListener("DOMContentLoaded", function () {

    const typingName = document.getElementById("typingName");

    if (!typingName) {
        console.error("Typing name element not found!");
        return;
    }

    const names = ["SK KHAWZA", "MR SHAIK"];

    let nameIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function animateName() {

        const currentName = names[nameIndex];

        if (!deleting) {

            typingName.textContent =
                currentName.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === currentName.length) {
                deleting = true;
                setTimeout(animateName, 1500);
                return;
            }

            setTimeout(animateName, 150);

        } else {

            typingName.textContent =
                currentName.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {
                deleting = false;
                nameIndex = (nameIndex + 1) % names.length;
            }

            setTimeout(animateName, 60);
        }
    }

    animateName();

});

/* END */

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

/* =================================
   MR SHAIK PORTFOLIO INTRO
================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("Portfolio JavaScript loaded!");

    const intro = document.getElementById("welcome-intro");
    const portfolio = document.getElementById("main-portfolio");

    console.log("Intro:", intro);
    console.log("Portfolio:", portfolio);

    if (!intro || !portfolio) {
        console.error("Required HTML elements are missing!");
        return;
    }

    // Show portfolio after 7 seconds
    setTimeout(() => {

        console.log("Opening main portfolio...");

        intro.style.opacity = "0";
        intro.style.visibility = "hidden";
        intro.style.pointerEvents = "none";

        portfolio.style.opacity = "1";
        portfolio.style.visibility = "visible";

        setTimeout(() => {
            intro.style.display = "none";
        }, 1100);

    }, 5000);

});

// =====================================
// CERTIFICATE IMAGE POPUP
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const certificateButtons = document.querySelectorAll(
        ".certificate-preview-btn"
    );

    const certificateModal = document.getElementById(
        "certificatePreviewModal"
    );

    const certificateImage = document.getElementById(
        "certificatePreviewImage"
    );

    const closeCertificate = document.getElementById(
        "certificatePreviewClose"
    );

    if (!certificateModal || !certificateImage) {
        return;
    }

    // OPEN CERTIFICATE
    certificateButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const imageSource = this.getAttribute(
                "data-certificate-src"
            );

            const imageAlt = this.getAttribute(
                "data-certificate-alt"
            );

            certificateImage.src = imageSource;
            certificateImage.alt = imageAlt || "Certificate";

            certificateModal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    // CLOSE CERTIFICATE
    function closeCertificatePopup() {

        certificateModal.classList.remove("active");

        document.body.style.overflow = "";

        certificateImage.src = "";

    }


    // CLOSE BUTTON
    closeCertificate.addEventListener("click", closeCertificatePopup);


    // CLICK OUTSIDE IMAGE
    certificateModal.addEventListener("click", function (event) {

        if (event.target === certificateModal) {
            closeCertificatePopup();
        }

    });


    // ESCAPE KEY
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeCertificatePopup();
        }

    });

});

