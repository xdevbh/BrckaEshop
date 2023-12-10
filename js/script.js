const menuButton = document.querySelector(".header__menuIcon");
const closeMenuButton = document.querySelector(".header__closeMenu");

menuButton.addEventListener("click", () => {
    document.querySelector(".header__mobMenu").classList.toggle("active");
});

closeMenuButton.addEventListener("click", () => {
    document.querySelector(".header__mobMenu").classList.toggle("active");
});

