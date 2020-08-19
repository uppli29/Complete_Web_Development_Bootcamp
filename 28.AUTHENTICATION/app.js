var express = require('express'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	passportLocalMongoose = require('passport-local-mongoose'),
	user = require('./models/Users');
const Users = require('./models/Users');
const { use } = require('passport');

var app = express();

//NOTE doing inline initialization
app.use(
	require('express-session')({
		secret: '65th_square',
		saveUninitialized: false,
		resave: false
	})
);

app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: true }));

//NOTE for encoding and decoding using built in passport method
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());
passport.use(new LocalStrategy(user.authenticate()));

mongoose.connect('mongodb://localhost/Authentication', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.get('/', (req, res) => {
	res.render('Home');
});

//SignUp form
app.get('/register', (req, res) => {
	res.render('register');
});

app.post('/register', (req, res) => {
	user.register(new user({ username: req.body.username }), req.body.password, (err, user) => {
		if (err) {
			console.log(err);
			res.render('register');
		} else {
			console.log(req.body.password);
			//NOTE we are using local method, if google or twitter is used we have to give corresponding auth
			passport.authenticate('local')(req, res, () => {
				res.redirect('/secret');
			});
		}
	});
});

//==========Login page=================//
app.get('/login', (req, res) => {
	res.render('login');
});

app.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/secret',
		failureRedirect: '/login'
	}),
	(req, res) => {}
);

app.get('/logout', (req, res) => {
	req.logOut();
	res.redirect('/');
});		

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

app.get('/secret', isLoggedIn, (req, res) => {
	res.render('secret');
});

app.listen('1000', () => {
	console.log('Running on 1000');
});
