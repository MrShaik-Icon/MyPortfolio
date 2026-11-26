/* ==========================================
   MR SHAIK PORTFOLIO - MAIN SCRIPT
========================================== */
document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("welcome-intro");
  const portfolio = document.getElementById("main-portfolio");
  const lettersHost = document.getElementById("portfolioLetters");

  // Build the large PORTFOLIO title one character at a time.
  if (lettersHost) {
    "PORTFOLIO".split("").forEach((letter, index) => {
      const span = document.createElement("span");
      span.className = "portfolio-letter";
      span.textContent = letter;
      span.style.setProperty("--letter-index", index);
      lettersHost.appendChild(span);
    });
  }

  // Start the intro animation, then reveal the original portfolio.
  if (intro && portfolio) {
    requestAnimationFrame(() => intro.classList.add("intro-start"));
    window.setTimeout(() => {
      intro.classList.add("intro-exit");
      portfolio.classList.add("portfolio-visible");
      startPortfolioFeatures();
      window.setTimeout(() => { intro.style.display = "none"; }, 1100);
    }, 4500);
  } else {
    if (portfolio) portfolio.classList.add("portfolio-visible");
    startPortfolioFeatures();
  }

  function startPortfolioFeatures() {
    // Continuous left-to-right typing animation.
    const typingName = document.getElementById("typingName");
    if (typingName && !typingName.dataset.started) {
      typingName.dataset.started = "true";
      const names = ["SK KHAWZA", "MR SHAIK"];
      let nameIndex = 0, charIndex = 0, deleting = false;
      const animateName = () => {
        const currentName = names[nameIndex];
        if (!deleting) {
          typingName.textContent = currentName.substring(0, charIndex + 1);
          charIndex++;
          if (charIndex === currentName.length) {
            deleting = true;
            setTimeout(animateName, 1500);
            return;
          }
          setTimeout(animateName, 150);
        } else {
          typingName.textContent = currentName.substring(0, charIndex - 1);
          charIndex--;
          if (charIndex === 0) {
            deleting = false;
            nameIndex = (nameIndex + 1) % names.length;
          }
          setTimeout(animateName, 60);
        }
      };
      animateName();
    }

    // Scroll reveal: initialize only after the main page is visible.
    const revealElements = document.querySelectorAll(
      ".section, .section-title, .about-card, .skill, .experience-card, .featured-cert, .cert-card, .project-card, .highlight-card, .contact-card"
    );
    const animationStyles = {
      about: "reveal-left", skills: "reveal-zoom", experience: "reveal-right",
      certifications: "reveal-flip", projects: "reveal-up", highlights: "reveal-left", contact: "reveal-zoom"
    };
    Object.entries(animationStyles).forEach(([id, className]) => {
      const section = document.getElementById(id);
      if (section) section.classList.add(className);
    });

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
      revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
      });
    } else {
      revealElements.forEach(element => element.classList.add("show"));
    }

    [".skill", ".cert-tile", ".project-card", ".highlight-grid article", ".contact-grid a"].forEach(selector => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.style.transitionDelay = `${index * 80}ms`;
      });
    });

    document.querySelectorAll(".hero h1, .hero h2, .hero p, .hero .gold-button, .hero img").forEach((element, index) => {
      element.style.animation = "fadeInUp 0.8s ease both";
      element.style.animationDelay = `${index * 120}ms`;
    });
  }

  // Mobile navigation.
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.textContent = isOpen ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.textContent = "☰";
    }));
  }

  // Current year.
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Contact details.
  const email = "sk.khwazaicon@gmail.com";
  const linkedin = "https://www.linkedin.com/in/shaik-khawza-99566414b/";
  const github = "https://github.com/MrShaik-Icon";
  const emailLink = document.getElementById("emailLink");
  if (emailLink) {
    emailLink.href = `mailto:${email}`;
    const label = emailLink.querySelector("b");
    if (label) label.textContent = email;
  }
  const linkedinLink = document.getElementById("linkedinLink");
  if (linkedinLink) linkedinLink.href = linkedin;
  const githubLink = document.getElementById("githubLink");
  if (githubLink) {
    githubLink.href = github;
    const label = githubLink.querySelector("b");
    if (label) label.textContent = "github.com/MrShaik-Icon";
  }
  const contactButton = document.getElementById("contactButton");
  if (contactButton) contactButton.href = `mailto:${email}`;

  // Certificate preview popup.
  const certificateModal = document.getElementById("certificatePreviewModal");
  const certificateImage = document.getElementById("certificatePreviewImage");
  const closeCertificate = document.getElementById("certificatePreviewClose");
  if (certificateModal && certificateImage) {
    document.querySelectorAll(".certificate-preview-btn").forEach(button => {
      button.addEventListener("click", () => {
        const source = button.getAttribute("data-certificate-src");
        if (!source) return;
        certificateImage.src = source;
        certificateImage.alt = button.getAttribute("data-certificate-alt") || "Certificate";
        certificateModal.classList.add("active");
        document.body.style.overflow = "hidden";
      });
    });
    const closeCertificatePopup = () => {
      certificateModal.classList.remove("active");
      document.body.style.overflow = "";
      certificateImage.src = "";
    };
    if (closeCertificate) closeCertificate.addEventListener("click", closeCertificatePopup);
    certificateModal.addEventListener("click", event => {
      if (event.target === certificateModal) closeCertificatePopup();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeCertificatePopup();
    });
  }

  // Close contact popup on outside click or Escape.
  const contactModal = document.getElementById("contactModal");
  if (contactModal) {
    contactModal.addEventListener("click", event => {
      if (event.target === contactModal) closeContactModal();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeContactModal();
    });
  }
});

// Keep these functions global because the HTML buttons use onclick attributes.
function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}
function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
}
window.openContactModal = openContactModal;
window.closeContactModal = closeContactModal;


