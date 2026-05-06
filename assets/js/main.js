const header = document.getElementById("header");
const themeToggle = document.getElementById("theme-toggle");
const footerYear = document.getElementById("footer-year");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

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

const updateActiveLink = () => {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 58;
    const sectionId = section.getAttribute("id");
    const link = document.querySelector(`.nav__link[href="#${sectionId}"]`);

    if (!link) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};

window.addEventListener("scroll", () => {
  updateHeader();
  updateActiveLink();
});

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

updateHeader();
updateActiveLink();
