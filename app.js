//run onsubmit if user submits form entry
window.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('anonymizer')
		.addEventListener('submit', onsubmit );
});

onsubmit = (event) => {
	event.preventDefault();

  // read user input from form field
	userinput = document.querySelector('[name="urlanon"]').value;

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
	} catch (err) {
		// print error message, if no valid URL is entered
		log.innerHTML =
			'<p><mark>Keine gültige URL.</mark> Bitte Eingabe in der Form <pre>https://example.com/{path/to/file.html}</pre></p>' +
			err +
			'</p>';
	}

	parts[parts.length - 2] = domain;

 // join parts of the URL
	newDomain =
		url.protocol +
		'//' +
		parts.join('.') +
		url.port +
		url.pathname +
		url.search +
		url.hash;

  // copy URL to clipboard
	navigator.clipboard.writeText(newDomain);

  // print anonymized URL
	let output = '<p>In die Zwischenablage kopiert:</p>';
	output += '<mark>' + newDomain + '</mark>';
	log.innerHTML = output;
};
