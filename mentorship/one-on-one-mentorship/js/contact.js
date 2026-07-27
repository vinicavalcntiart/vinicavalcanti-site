/* Vini Cavalcanti School — Homepage contact form
   Sends the form via FormSubmit AJAX endpoint, with graceful fallback:
   if JS fails, the form still submits normally via its action attribute. */
(function () {
  'use strict';

  var form = document.getElementById('contact-form');
  if (!form) return;

  var statusEl = document.getElementById('form-status');
  var submitBtn = document.getElementById('contact-submit');
  var ENDPOINT = 'https://formsubmit.co/ajax/contact@vinicavalcanti.art';

  function setStatus(message, ok) {
    if (!statusEl) return;
    statusEl.textContent = message;
    statusEl.classList.remove('form-status--ok', 'form-status--error');
    statusEl.classList.add(ok ? 'form-status--ok' : 'form-status--error');
  }

  form.addEventListener('submit', function (event) {
    if (!window.fetch) return; /* very old browser: let the normal POST happen */
    event.preventDefault();

    var data = {
      name: form.elements.name ? form.elements.name.value : '',
      email: form.elements.email ? form.elements.email.value : '',
      message: form.elements.message ? form.elements.message.value : '',
      _subject: 'New message from vinicavalcanti website',
      _honey: form.elements._honey ? form.elements._honey.value : ''
    };

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }
    setStatus('', true);

    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        if (!response.ok) throw new Error('Request failed');
        return response.json();
      })
      .then(function () {
        form.reset();
        setStatus('Message sent! Vini will get back to you soon.', true);
      })
      .catch(function () {
        setStatus('Something went wrong. Please try again or email contact@vinicavalcanti.art directly.', false);
      })
      .finally(function () {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send message';
        }
      });
  });
})();
