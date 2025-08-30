const toggleMenu = () => {
  const menu = document.querySelector(".burgerNavMenu");
  const icon = document.querySelector(".hamburgerIcon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
