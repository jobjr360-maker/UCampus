const notificationBtn = document.querySelector(".notification-btn");
const notificationMenu = document.querySelector(".notification-menu");

/* Toggle notification menu on button click */
if (notificationBtn) {
    notificationBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        notificationMenu.classList.toggle("active");
    });
}

/* Close notification menu on outside click */
document.addEventListener("click", () => {
    if (notificationMenu) {
        notificationMenu.classList.remove("active");
    }
});

/* Close notification menu on Escape key press */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && notificationMenu) {
        notificationMenu.classList.remove("active");
    }
});
