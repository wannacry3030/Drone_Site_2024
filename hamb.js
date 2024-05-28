function toggleMenu() {
  const menu = document.querySelector(".hamburger-menu");
  const navList = document.querySelector(".nav-list");

  menu.classList.toggle("change");
  navList.classList.toggle("active");
}
