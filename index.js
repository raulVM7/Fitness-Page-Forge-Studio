const menuBtn = document.getElementById("menu-btn");
const navRight = document.querySelector(".nav_right");

menuBtn.addEventListener("click", () => {
  const isOpen = navRight.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav_menu a").forEach(link => {
  link.addEventListener("click", () => {
    navRight.classList.remove("is-open");
    menuBtn.setAttribute("aria-expanded", false);
  });
});
