var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello there!, Welcome to my Assignment!');
});

app.get('/speak/:animal', function(req, res) {
	var sounds = {
		dog: 'whoof whoof',
		cow: 'Moo',
		pig: 'oink',
		cat: 'Meow'
	};
	var animal = req.params.animal.toLowerCase;
	var sound = sounds[animal];
	res.send('The ' + animal + ' Says ' + sound);
});

app.get('/repeat/:message/:times', function(req, res) {
	var msg = req.params.message;
	var n = Number(req.params.times);
	var result = '';
	console.log(n);
	for (var i = 0; i < n; i++) {
		//NOTE only one res can be sent
		result += msg + ' ';
	}
	res.send(result);
});

app.get('*', function(req, res) {
	res.send('Sorry Page not found!');
});

app.listen(4000, function() {
	console.log('Serving started on port 4000');
});
