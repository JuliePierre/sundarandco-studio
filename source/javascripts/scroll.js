// initialisation des variables
let currentSection = null
let targetId = null
let target = null
let move = ""
let isMoving = false;
// définition des fonctions
function down(element) {
  element.classList.remove('on-screen');
}
function up(element) {
  element.classList.add('up');
}
function stepBack(target) {
  target.classList.remove('front-page');
}
function navigateTo(){
   isMoving = true;
   window.setTimeout(function() { isMoving = false; },2000);
}
function desktopScroller(morePage, newsLetter){
  window.addEventListener('wheel', function(event) {
    // CLIENTS //
    if (document.getElementById('clients-list')) {
      // firing event only once
      event.preventDefault();
      if (isMoving) return;
      navigateTo();
      // getting info from actual section
      currentSection = document.querySelectorAll(".fullpage.on-screen")[document.querySelectorAll(".fullpage.on-screen").length - 1]
      // if scrolling is to the bottom
      if (event.deltaY > 0) {
        targetId = currentSection.dataset.next;
        target = document.getElementById(targetId);
        target.classList.add('on-screen');
        // after the current project is on screen, we have to move up the previous project
        let timeoutID;
        timeoutID = window.setTimeout(function() { up(currentSection); }, 400) //wait before continuing
      }
      // if scrolling is to the top
      else if (event.deltaY < 0) {
        targetId = currentSection.dataset.prev;
        target = document.getElementById(targetId);
        target.classList.add('front-page');
        target.classList.remove('up');
        window.setTimeout(function() { down(currentSection); }, 400)
        window.setTimeout(function() { stepBack(target); }, 500)
      }
    }
    // SECTION MORE & NL //
    if (morePage) {
      // firing event only once
      event.preventDefault();
      if (isMoving) return;
      navigateTo();
      if (event.deltaY < 0) {
        morePage.classList.add('front-page');
        morePage.classList.remove('up');
        window.setTimeout(function() { down(newsLetter); }, 400)
        window.setTimeout(function() { stepBack(morePage); }, 500)
      }
    }
  });
}
function mobileScroller(morePage, newsLetter){
  // Logique de slider sur la page Clients pour le mobile
  let clientY;
  window.addEventListener('touchstart', function(e) {
    clientY = e.touches[0].clientY;
  }, false);
  window.addEventListener('touchend', function(e) {
    let deltaY;
    deltaY = e.changedTouches[0].clientY - clientY;
    currentSection = document.querySelectorAll(".fullpage.on-screen")[document.querySelectorAll(".fullpage.on-screen").length - 1]
    // Check si touchmove vers le haut ou vers le bas
    if (document.getElementById('clients-list')) {
      if (deltaY < 0) {
        targetId = currentSection.dataset.next;
        target = document.getElementById(targetId);
        target.classList.add('on-screen');

        let timeoutID;
        timeoutID = window.setTimeout(function() { up(currentSection); }, 400) //wait one second before continuing
      }
      else if (deltaY > 0) {
        targetId = currentSection.dataset.prev;
        target = document.getElementById(targetId);
        target.classList.add('front-page');
        target.classList.remove('up');
        window.setTimeout(function() { down(currentSection); }, 400)
        window.setTimeout(function() { stepBack(target); }, 500)
      }
    }
    // SECTION MORE & NL //
    if (morePage) {
      if (deltaY > 0) {
        morePage.classList.add('front-page');
        morePage.classList.remove('up');
        window.setTimeout(function() { down(newsLetter); }, 400)
        window.setTimeout(function() { stepBack(morePage); }, 500)
      }
    }
  }, false);
}
function showNewsletter(morePage, newsLetter){
  const links = document.querySelectorAll('.linkToNL');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      newsletter.classList.add('on-screen')
      let timeoutID;
      timeoutID = window.setTimeout(function() { up(morePage); }, 400) //wait one second before continuing
    });
  });
}
function initScroller(){
  // commun à toutes les fonctions
  const morePage = document.getElementById('more-page');
  const newsLetter = document.getElementById('newsletter');
  desktopScroller(morePage, newsLetter);
  mobileScroller(morePage, newsLetter);
  showNewsletter(morePage, newsLetter);
}
