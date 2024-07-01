// Toggle class
const navbarMenu = document.querySelector(".navbar-menu");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

// ketika hamburger-menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// Toggle dropdown menu on tablet and mobile sizes
dropdownToggle.onclick = (e) => {
  e.preventDefault();
  dropdownMenu.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
