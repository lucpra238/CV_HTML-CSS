// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('.navbar');

window.addEventListener('.scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;
   
    if (scrollTop > lastScrollTop) {
      navbar.style.top="-50px";
    } else {
      navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed('.typed', {
    strings: ["Bonjour", "Après avoir découvert plusieurs métier durant mon parcours, cela fait plus de 6 mois que j'ai décidé d'apprendre la programation, j'ai commencé par me former sur openclassroom pour ensuite pouvoir exercer quelques TP tels que celui-ci afin de pouvoir devenir développeur le plus rapidement possible et pouvoir continuer à me former sur le terrain. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder. "],
    typeSpeed: 20,
});






