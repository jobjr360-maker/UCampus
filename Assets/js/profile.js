const profileBtn = document.querySelector(".profile-btn");
const profileMenu = document.querySelector(".profile-menu");
const arrow = document.querySelector(".arrow");

/* Toggle dropdown and arrow on profile button click (single handler) */
profileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profileMenu.classList.toggle("active");
    if (arrow) arrow.classList.toggle("rotate");
});

/* Close profile menu on outside click or Escape key */
document.addEventListener("click", () => {
    profileMenu.classList.remove("active");
    if (arrow) arrow.classList.remove("rotate");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        profileMenu.classList.remove("active");
        if (arrow) arrow.classList.remove("rotate");
    }
});