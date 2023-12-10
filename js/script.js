// function menutoggle() {
//     const menuItems = document.getElementById("menuItems");
//     if (menuItems.style.maxHeight == "0px") {
//         menuItems.style.maxHeight = "300px";
//     } else {
//         menuItems.style.maxHeight = "0px";
//     }
// }

// function menutoggle() {
//     var menuItems = document.getElementById("menuItems");
//     if (menuItems.style.display === "block") {
//         menuItems.style.display = "none";
//     } else {
//         menuItems.style.display = "block";
//     }
// }

// function openSearch() {
//     document.getElementById("myOverlay").style.display = "block";
// }

// function closeSearch() {
//     document.getElementById("myOverlay").style.display = "none";
// }

const menuButton = document.querySelector(".header__menuIcon");
const closeMenuButton = document.querySelector(".header__closeMenu");

menuButton.addEventListener("click", () => {
    document.querySelector(".header__mobMenu").classList.toggle("active");
});

closeMenuButton.addEventListener("click", () => {
    document.querySelector(".header__mobMenu").classList.toggle("active");
});