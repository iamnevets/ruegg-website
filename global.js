document.addEventListener("DOMContentLoaded", function () {
  const currentUrl = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuItems = document.querySelectorAll(".mobile-menu-item");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  mobileMenuItems.forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  navLinks.forEach(function (link) {
    const linkUrl = link.getAttribute("href").split("/").pop();
    if (linkUrl === currentUrl) {
      link.classList.add("current-page");
    } else {
      link.classList.remove("current-page");
    }
  });
});
