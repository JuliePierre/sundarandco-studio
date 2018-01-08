document.addEventListener("DOMContentLoaded", () => {
  // Add here your addEventListener code
  let currentPage = document.querySelectorAll(".page-index");
  let currentLink = currentPage[0].dataset.page;
  let mobileCurrentLink = "mobile-" + currentPage[0].dataset.page;
  document.getElementById(currentLink).classList.add("active");
  document.getElementById(mobileCurrentLink).classList.add("active");

  // Smooth scroll
  // if (document.getElementById('clients-list')) {
  //   const height = window.innerHeight;
  //   const clientsList = document.getElementById('clients-list').dataset.info;
  //   const info = JSON.parse(clientsList);
  //   window.addEventListener('scroll', function(e) {
  //     test = document.getElementById('otium-capital').getBoundingClientRect().top;
  //     console.log(test);
  //     info.forEach((client) => {
  //       target = document.getElementById(client);
  //       if ((target.getBoundingClientRect().top < (height - 400)) && (target.getBoundingClientRect().top > 0)) {
  //         target.scrollIntoView({behavior: 'smooth', block: 'start'});
  //       };
  //     });
  //   });
  // };

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
