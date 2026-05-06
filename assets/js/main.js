const header = document.getElementById("header");
const themeToggle = document.getElementById("theme-toggle");
const footerYear = document.getElementById("footer-year");
const revealTargets = document.querySelectorAll(
  ".section__subtitle, .section__title, .about__image, .about__box, .about__description, .about__data .button, .skills__content, .services__card, .work__card, .contact__content, .footer__title, .footer__list, .footer__social, .footer__copy"
);

document.documentElement.classList.add("motion-ready");

const savedTheme = localStorage.getItem("selected-theme");
const savedIcon = localStorage.getItem("selected-icon");

if (savedTheme === "light") {
  document.body.classList.add("light-theme");
}

if (savedIcon && themeToggle) {
  themeToggle.querySelector("i").className = savedIcon;
}

const updateHeader = () => {
  header.classList.toggle("scroll-header", window.scrollY >= 50);
};

window.addEventListener("scroll", updateHeader);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("bx-moon");
    icon.classList.toggle("bx-sun");

    localStorage.setItem("selected-theme", document.body.classList.contains("light-theme") ? "light" : "dark");
    localStorage.setItem("selected-icon", icon.className);
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 80}ms`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealTargets.forEach((element) => revealObserver.observe(element));

updateHeader();
