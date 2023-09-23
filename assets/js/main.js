document.addEventListener("DOMContentLoaded", function (event) {
    const linkPath = window.location.pathname;
    const buttonsHeader = document.querySelectorAll('.header ul li a');

    if(linkPath === "/") {
        buttonsHeader[0].setAttribute('active', '')
    } if(linkPath === "/contato.html") {
        buttonsHeader[2].setAttribute('active', '')
    } if(linkPath ===  '/habilidades.html') {
        buttonsHeader[1].setAttribute('active', '')
    }
  });