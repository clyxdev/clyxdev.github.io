const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link");
const header = document.getElementById("header");
const copyLink = document.getElementById("copy-link");
const footerYear = document.getElementById("footer-year");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
});

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY >= 24);
};

window.addEventListener("scroll", updateHeader);
updateHeader();

const sections = document.querySelectorAll("section[id]");

const setActiveLink = () => {
  const scrollPosition = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (!link) return;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", setActiveLink);
setActiveLink();

if (copyLink) {
  copyLink.addEventListener("click", async () => {
    const url = "https://clyxdev.github.io/";
    await navigator.clipboard.writeText(url);
    const originalText = copyLink.innerHTML;
    copyLink.innerHTML = '<i class="ri-check-line"></i> Copied';
    setTimeout(() => {
      copyLink.innerHTML = originalText;
    }, 1600);
  });
}

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
