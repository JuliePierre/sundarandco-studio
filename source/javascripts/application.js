//= require jquery
//= require materialize-sprockets
//= require_tree .

document.addEventListener("DOMContentLoaded", () => {
  // Add here your addEventListener code
  let currentPage = document.querySelectorAll(".page-index");
  let currentLink = currentPage[0].dataset.page;
  let mobileCurrentLink = "mobile-" + currentPage[0].dataset.page;
  document.getElementById(currentLink).classList.add("active");
  document.getElementById(mobileCurrentLink).classList.add("active");



  // Changement de pages : next
  let nextButtons = document.querySelectorAll(".button.next")
  nextButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let target = event.currentTarget.dataset.target;
      let targetSection = document.getElementById(target);
      targetSection.classList.add('on-screen');

      let element = event.currentTarget.dataset.page
      let timeoutID;
      timeoutID = window.setTimeout(function() { up(element); }, 1000) //wait one second before continuing

      function up(element) {
        //finish doing things after the pause
        let activePage = document.getElementById(element);
        activePage.classList.add('up');
      }
    });
  });

  // Changement de pages : previoux
  let prevButtons = document.querySelectorAll(".button.prev")
  prevButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let target = event.currentTarget.dataset.target;
      let targetSection = document.getElementById(target);
      targetSection.classList.add('front-page');
      targetSection.classList.remove('up');
      let element = event.currentTarget.dataset.page

      window.setTimeout(function() { down(element); }, 500) //wait one second before continuing

      function down(element) {
        //finish doing things after the pause
        let activePage = document.getElementById(element);
        activePage.classList.remove('on-screen');
      }

      window.setTimeout(function() { stepBack(target); }, 1000) //wait one second before continuing

      function stepBack(target) {
        //finish doing things after the pause
        let targetSection = document.getElementById(target);
        targetSection.classList.remove('front-page');
      }
    });
  });

  // let prevButtons = document.querySelectorAll(".button.prev")
  // prevButtons.forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     let targetSection = document.getElementById(event.currentTarget.dataset.target);
  //     pages.forEach((page) => {
  //       page.classList.remove('active');
  //     });
  //     targetSection.classList.add('active');
  //   });
  // });

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
