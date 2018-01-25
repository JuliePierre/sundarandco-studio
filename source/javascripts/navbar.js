function showNavbar() {
  const navbar = document.getElementById("wrapper-mobile-nav");
  navbar.classList.toggle("visible");
  const hamburgerIcon = document.getElementById('nav-icon3')
  hamburgerIcon.classList.toggle('open');
}
function initNavbar() {
  const hamburger = document.getElementById("nav-icon3");
  hamburger.addEventListener("click", showNavbar, false);
};
function underlineLinks(){
  let currentPage = document.querySelectorAll(".page-index");
  let currentLink = currentPage[0].dataset.page;
  let mobileCurrentLink = "mobile-" + currentPage[0].dataset.page;
  document.getElementById(currentLink).classList.add("active");
  document.getElementById(mobileCurrentLink).classList.add("active");
}
