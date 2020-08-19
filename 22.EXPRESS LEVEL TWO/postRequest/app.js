var app = require("express")();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs");

var friends = ['A', 'B', 'C', "D", 'E'];

app.get("/", function (req, res) {
    res.render("home")
});

app.post("/addfriends", function (req, res) {
    var newFriend = (req.body.newFriend)
    friends.push(newFriend)
    res.redirect("/friends")
});

app.get("/friends", function (req, res) {

    res.render("friends", { friends: friends });
})
app.listen(4000, function (req, res) {
    console.log("Listening on port 4000")
});