//ANCHOR --save will add package to the package.json dependency;
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Welcome to HomePage');
});

app.get('/r/:subRedditName', function(req, res) {
	console.log(req.params);
	var subReddit = req.params.subRedditName;
	res.send('Welcome to the ' + subReddit.toUpperCase() + ' Page');
});

app.get('/r/:subReddditName/comments/:id/:title', function(req, res) {
	console.log(req.params);

	res.send('Welcome to the comments page');
});

app.listen(3000, function() {
	console.log('Running on port 3000');
});
