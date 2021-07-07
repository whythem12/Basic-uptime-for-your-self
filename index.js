const links = require('./links.json');
const express = require('express');
const fetch = require('node-fetch')
app = express();

const port = 3000;
app.get('/', (req, res) => console.log('Link alındı'));

setInterval(() => {
	console.log(Date.now());
	links.forEach(l => {
		fetch(l);
		console.log('Bu link uptimeye hazır! ->' + l);
	});
	console.log(' ');
}, 20000);

app.listen(port);
