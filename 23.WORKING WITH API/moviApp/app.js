// Note about Movie API lectures
// Hi everyone,
// The Open Movie Data Base Movie API that we'll be using the next set of lectures has recently gone private.

// In response to this, Colt has acquired an API key for everyone to use.

// Here's the new way of making requests with the key:

// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=th

// So everything is exactly the same as Colt explains in the following videos,
//except you must append &apikey=thewdb to the end of your url.

// In your code, using string concatenation, that will look like this:
// "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"

// Or, with a more modern approach, using a template literal:
// `http://www.omdbapi.com/?s=${query}&apikey=thewdb`

// Please let us know if you any questions.

// Thanks,
// Ian

const axios = require('axios');

var app = require('express')();

app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Running on port 3000');
});

app.get('/', (req, res) => {
	res.render('form');
});

app.get('/results', (req, res) => {
	var query = req.query.search;
	var url = 'http://www.omdbapi.com/?s=' + query + '&apikey=thewdb';
	axios
		.get(url)
		.then(function(response) {
			res.render('results', { results: response.data.Search });
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.finally(function() {
			// always executed
		});
});
