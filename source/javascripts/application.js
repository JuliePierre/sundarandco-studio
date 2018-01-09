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

  // Changement de pages : previous
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

  // lien vers l'inscription à la newsletter
  const links = document.querySelectorAll('.linkToNL')
  const moreSection = document.getElementById('more-page')
  const newsLetter = document.getElementById('newsletter')
  links.forEach((link) => {
  link.addEventListener("click", (event) => {
    newsletter.classList.add('on-screen')
    let timeoutID;
      timeoutID = window.setTimeout(function() { up(moreSection); }, 1000) //wait one second before continuing

      function up(element) {
        //finish doing things after the pause
        element.classList.add('up');
      }
  });

  // scrolling logic
  let currentSection = null
  let targetId = null
  let target = null
  let move = ""
  let isMoving = false;

  window.addEventListener('wheel', function(event) {
    // firing event only once
    event.preventDefault();
    if (isMoving) return;
    navigateTo();

    // getting info from actual section
    currentSection = document.querySelectorAll(".fullpage.on-screen")[document.querySelectorAll(".fullpage.on-screen").length - 1]

    // if scrolling is to the bottom
    if (event.deltaY > 0) {
      if (document.getElementById('clients-list')) {
        targetId = currentSection.dataset.next;
        target = document.getElementById(targetId);
        target.classList.add('on-screen');

        let timeoutID;
        timeoutID = window.setTimeout(function() { up(currentSection); }, 1000) //wait one second before continuing
      }
      // définition des fonctions
      function up(element) {
        //finish doing things after the pause
        element.classList.add('up');
      }
    }
    // if scrolling is to the top
    else if (event.deltaY < 0) {
      if (moreSection) {
        moreSection.classList.add('front-page');
        moreSection.classList.remove('up');

        window.setTimeout(function() { down(newsLetter); }, 500)

        window.setTimeout(function() { stepBack(moreSection); }, 1000)
      }
      if (document.getElementById('clients-list')) {
        targetId = currentSection.dataset.prev;
        target = document.getElementById(targetId);
        target.classList.add('front-page');
        target.classList.remove('up');

        window.setTimeout(function() { down(currentSection); }, 500)
        window.setTimeout(function() { stepBack(target); }, 1000)
      }

      // définitions des fonctions
      function down(element) {
        //finish doing things after the pause
        element.classList.remove('on-screen');
      }
      function stepBack(target) {
        //finish doing things after the pause
        target.classList.remove('front-page');
      }
    }
  });
});

  // check if mouth is moving
  function navigateTo(){
     isMoving = true;
     window.setTimeout(function() { isMoving = false; },2000);
  }

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
