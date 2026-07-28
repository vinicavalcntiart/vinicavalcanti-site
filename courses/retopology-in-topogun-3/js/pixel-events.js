/* Meta Pixel — InitiateCheckout nos CTAs de checkout da Hotmart.
   Arquivo compartilhado, idêntico na pasta js/ de todas as páginas.
   Mapeia o id do checkout presente no href para valor/moeda do produto;
   os links em si não são alterados. Requer o código base do Pixel no <head>. */
(function () {
  'use strict';

  var PRODUCTS = {
    'J105527673H': { name: 'ZBrush for Stylized Characters', value: 49 },
    'S105526894H': { name: 'Retopology in TopoGun 3', value: 39 },
    'M105761103N': { name: 'Character Design: Baby Allosaurus', value: 49 },
    'D105581670W': { name: 'One-on-One Mentorship', value: 600 }
  };

  function onCheckoutClick(event) {
    if (typeof window.fbq !== 'function') return;
    var match = event.currentTarget.href.match(/pay\.hotmart\.com\/([A-Za-z0-9]+)/);
    var product = match && PRODUCTS[match[1]];
    if (product) {
      window.fbq('track', 'InitiateCheckout', {
        content_name: product.name,
        value: product.value,
        currency: 'USD'
      });
    } else {
      window.fbq('track', 'InitiateCheckout');
    }
  }

  document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach(function (link) {
    link.addEventListener('click', onCheckoutClick);
  });
})();
