//= require jquery
//= require_tree.

document.addEventListener("DOMContentLoaded", () => {
  // Add here your addEventListener code
  let currentPage = document.querySelectorAll(".page-index");
  let currentLink = currentPage[0].dataset.page;
  let mobileCurrentLink = "mobile-" + currentPage[0].dataset.page;
  document.getElementById(currentLink).classList.add("active");
  document.getElementById(mobileCurrentLink).classList.add("active");

  // Smooth scroll
  const clientsList = document.getElementById('clients-list').dataset.info;
  const info = JSON.parse(clientsList);
  let i = 0
  window.addEventListener('scroll', function(e) {
  });

  // Définition des fonctions
  function showNavbar() {
    const navbar = document.getElementById("wrapper-mobile-nav");
    navbar.classList.toggle("visible");
    const hamburgerIcon = document.getElementById('nav-icon3')
    hamburgerIcon.classList.toggle('open');
  }
  function initElement() {
    // NOTE: showAlert(); ou showAlert(param); NE fonctionne PAS ici.
    // Il faut fournir une valeur de type function (nom de fonction déclaré ailleurs ou declaration en ligne de fonction).
    // OPEN
    const hamburger = document.getElementById("nav-icon3");
    hamburger.addEventListener("click", showNavbar, false);
  };

  // Appel des fonctions
  initElement();
});

$(document).ready(function() {
  $('#fullpage').fullpage();
});
