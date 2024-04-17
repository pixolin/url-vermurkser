//run onsubmit if user submits form entry
window.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('anonymizer')
    .addEventListener('submit', onsubmit);
});



onsubmit = (event) => {
  event.preventDefault();



  // read user input from form field
  const userinput = document.querySelector('[name="urlanon"]').value;
  const addtext = document.querySelector('[name="addtext"]').checked;

  // split URL in parts to get the hostname
  try {
    url = new URL(userinput);

    toAnonymize = url.hostname;
    parts = toAnonymize.split('.');
    domain = parts[parts.length - 2];

    // replace middle of hostname to anonymize URL
    if (domain.length < 8) {
      domain = domain[0] + '...' + domain[domain.length - 1];
    } else {
      domain =
        domain.slice(0, 3) +
        '...' +
        domain.slice(domain.length - 3, domain.length);
    }

    parts[parts.length - 2] = domain;

  } catch (err) {
    // print error message, if no valid URL is entered
    log.innerHTML =
      '<p><mark>Keine gültige URL.</mark></p><p> Bitte Eingabe in der Form & nbsp; <tt>https://example.com/{path/to/file.html}</tt>.</p>';
  }

  // join parts of the URL
  newDomain =
    url.protocol +
    '//' +
    parts.join('.') +
    url.port +
    url.pathname +
    url.search +
    url.hash;

  if (addtext === true) {
    newDomain = `${newDomain} (Domain anonymisiert)`;
  } else {
    newDomain = newDomain;
  }

  let output = `<p>In die Zwischenablage kopiert:</p><mark>${newDomain}</mark>`;
  log.innerHTML = output;

  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

  writeClipboardText(newDomain);

  const article = document.getElementById('article');
  article.classList.add('green');
  setTimeout(function () {
    article.classList.remove('green');
  }, 2000);

};
