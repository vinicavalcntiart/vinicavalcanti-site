/* Auto-tag de origem na URL + repasse para o checkout (padrão do mercado Hotmart).
   Arquivo compartilhado, idêntico na pasta js/ de todas as páginas.
   - Visita sem parâmetros -> a URL recebe utm_source=direto&src=direto&sck=<id de sessão>
   - Visita com parâmetros (anúncio/hotlink) -> os valores recebidos são preservados
   - A origem persiste na navegação interna via sessionStorage (chave vc_track)
   - Nos links pay.hotmart.com acrescenta src/utm_source da origem; o sck=lp_* fixo
     definido no href é mantido (identifica a página no painel da Hotmart).
   Não altera IDs de produto nem qualquer outra parte dos links. */
(function () {
  'use strict';

  var KEY = 'vc_track';
  var params = new URLSearchParams(window.location.search);
  var stored = null;
  try { stored = JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { /* private mode */ }

  function newSck() {
    return Date.now() + '_' + String(Math.random()).slice(2, 16);
  }

  var track;
  if (params.get('utm_source') || params.get('src') || params.get('sck')) {
    track = {
      utm_source: params.get('utm_source') || 'direto',
      src: params.get('src') || params.get('utm_source') || 'direto',
      sck: params.get('sck') || newSck()
    };
  } else if (stored && stored.sck) {
    track = stored;
  } else {
    track = { utm_source: 'direto', src: 'direto', sck: newSck() };
  }
  try { sessionStorage.setItem(KEY, JSON.stringify(track)); } catch (e) { /* ignore */ }

  /* Espelha a origem na barra de endereco, preservando o que ja veio na URL. */
  ['utm_source', 'src', 'sck'].forEach(function (k) {
    if (!params.get(k)) params.set(k, track[k]);
  });
  try {
    history.replaceState(null, '', window.location.pathname + '?' + params.toString() + window.location.hash);
  } catch (e) { /* ignore */ }

  /* Repassa a origem aos links de checkout, sem tocar no sck=lp_* nem nos demais parametros. */
  document.querySelectorAll('a[href*="pay.hotmart.com"]').forEach(function (link) {
    try {
      var url = new URL(link.href);
      if (!url.searchParams.get('src')) url.searchParams.set('src', track.src);
      if (!url.searchParams.get('utm_source')) url.searchParams.set('utm_source', track.utm_source);
      link.href = url.toString();
    } catch (e) { /* href invalido: ignora */ }
  });
})();
