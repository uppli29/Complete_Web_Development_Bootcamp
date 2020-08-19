var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('Welcome to the HomePage');
});

app.get('/posts', function(req, res) {
	var post = [
		{ title: 'post 1', author: 'A1' },
		{ title: 'post 2', author: 'A2' },
		{ title: 'Post 3', author: 'A3' }
	];
	res.render('post.ejs', { post: post });
});

app.get('/r/:title', function(req, res) {
	var title = req.params.title;
	res.render('reddit.ejs', { titleVar: title }); //NOTE we have to send variable to ejs via parameter as objects
});

app.listen(3000, function() {
	console.log('server started on port:3000');
});
