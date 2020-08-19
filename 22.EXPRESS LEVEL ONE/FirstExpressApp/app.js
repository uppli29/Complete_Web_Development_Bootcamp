const express = require('express');

//NOTE initialized to var app
var app = express();

//ANCHOR when going to / says Hi
app.get('/', function(req, res) {
	res.send('Hi There!');
});

app.get('/cats', function(req, res) {
	res.send('MEOW!!');
});

app.get('/bye', function(req, res) {
	console.log('Someone has made a request to /bye');
	res.send('GoodBye!!');
});

//NOTE any other route
app.get('*', function(req, res) {
	res.send('Connection Problem');
});

//ANCHOR Tell express to listen for request(start server)
app.listen(3000, function() {
	console.log('Running on port 3000');
});
