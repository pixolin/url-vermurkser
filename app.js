window.addEventListener('DOMContentLoaded', function () {
	document
		.getElementById('anonymizer')
		.addEventListener('submit', (event) => {});
});

onsubmit = (event) => {
	event.preventDefault();

	userinput = document.querySelector('[name="urlanon"]').value;

	if (!userinput.startsWith('http')) {
		userinput = 'http://' + userinput;
	}

	try {
		url = new URL(userinput);

		toAnonymize = url.hostname;
		parts = toAnonymize.split('.');
		domain = parts[parts.length - 2];

		if (domain.length < 8) {
			domain = domain[0] + '...' + domain[domain.length - 1];
		} else {
			domain =
				domain.slice(0, 3) +
				'...' +
				domain.slice(domain.length - 3, domain.length);
		}
	} catch (err) {
		log.innerHTML =
			'<p><mark>Keine gültige URL.</mark> Bitte Eingabe in der Form <pre>https://example.com/{path/to/file.html}</pre></p>' +
			err +
			'</p>';
	}

	parts[parts.length - 2] = domain;

	newDomain =
		url.protocol +
		'//' +
		parts.join('.') +
		url.port +
		url.pathname +
		url.search +
		url.hash;

	navigator.clipboard.writeText(newDomain);

	let output = '<p>In die Zwischenablage kopiert:</p>';
	output += '<mark>' + newDomain + '</mark>';
	log.innerHTML = output;
};
