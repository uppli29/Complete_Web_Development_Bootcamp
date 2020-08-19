var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.render('home.ejs');
});

app.get('/r/:title', function(req, res) {
	var title = req.params.title;
	res.render('reddit.ejs', { titleVar: title }); //NOTE we have to send variable to ejs via parameter as objects
});

app.listen(3000, function() {
	console.log('server started on port:3000');
});
