document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".nav-link");

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        const linkUrl = link.getAttribute("href").split("/").pop();
        if (linkUrl === currentUrl) {
            link.classList.add("current-page");
        } else {
            link.classList.remove("current-page")
        }
    });
});
