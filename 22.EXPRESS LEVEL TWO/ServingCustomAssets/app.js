var express = require('express');
const { static } = require('express');

var app = express();

app.use(express.static("public")); //NOTE  telling express to use public dir
app.set("view engine", "ejs"); //telling express default render of ejs

app.get('/', function (req, res) {
    res.send('Welcome to the HomePage');
});



app.get('/posts', function (req, res) {
    var post = [
        { title: 'post 1', author: 'A1' },
        { title: 'post 2', author: 'A2' },
        { title: 'Post 3', author: 'A3' }
    ];
    res.render('post', { post: post });
});

app.get('/r/:title', function (req, res) {
    var title = req.params.title;
    res.render('reddit', { titleVar: title }); //NOTE we have to send variable to ejs via parameter as objects
});

app.listen(3000, function () {
    console.log('server started on port:3000');
});
