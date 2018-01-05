document.addEventListener("DOMContentLoaded", () => {
  // Add here your addEventListener code
  let currentPage = document.querySelectorAll(".page-index");
  let currentLink = currentPage[0].dataset.page;
  document.getElementById(currentLink).classList.add("active");

  // Smooth scroll
  if (document.getElementById('clients-list')) {
    const height = window.innerHeight;
    const clientsList = document.getElementById('clients-list').dataset.info;
    const info = JSON.parse(clientsList);
    window.addEventListener('scroll', function(e) {
      test = document.getElementById('otium-capital').getBoundingClientRect().top;
      console.log(test);
      info.forEach((client) => {
        target = document.getElementById(client);
        if ((target.getBoundingClientRect().top < (height - 400)) && (target.getBoundingClientRect().top > 0)) {
          target.scrollIntoView({behavior: 'smooth', block: 'start'});
        };
      });
    });
  };


});
