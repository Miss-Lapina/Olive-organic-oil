document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector("header nav ul");
    const menuButton = document.querySelector(".menu-button");

    menuButton.addEventListener("click", function() {
        menuToggle.classList.toggle("active");
    });
});
