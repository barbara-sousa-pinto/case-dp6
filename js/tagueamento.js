// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

<!-- Google Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-202541956-1', {'cookieDomain': 'localhost:5000'});
ga('create', 'UA-202541956-1', {'cookieDomain': 'https://barbara-sousa-pinto.github.io/case-dp6'});


// Page Views
ga('send', 'pageview', '/index.html');
ga('send', 'pageview', '/analises.html');
ga('send', 'pageview', '/sobre.html');


// let log = document.getElementByClass('menu-lista-link menu-lista-contato');
//
// document.onclick = inputChange;
//
// function inputChange(e) {
// // log.textContent = `Posição: (${e.clientX}, ${e.clientY})`;
//     ga('send', {
//         hitType: 'event',
//         // page: '/index.html',
//         eventCategory: 'menu',
//         eventAction: 'entre_em_contato',
//         eventLabel: 'link_externo'
//     });
// }

// ga('send', {
//   hitType: 'event',
//   page: '/index.html',
//   eventCategory: 'menu',
//   eventAction: 'entre_em_contato',
//   eventLabel: 'link_externo'
// });


<!-- End Google Analytics -->