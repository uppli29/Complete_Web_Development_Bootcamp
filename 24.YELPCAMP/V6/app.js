var app = require('express')(),
	bodyParser = require('body-parser'),
	passport = require('passport'),
	LocalStrategy = require('passport-local'),
	moongose = require('mongoose'),
	camp = require('./models/campground'),
	Comment = require('./models/comment'),
	User = require('./models/user'),
	seedDB = require('./seeds');

var testRoute = require('./routes/test');

app.use(testRoute);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

//ANCHOR =========PASSPORT setup==============//
app.use(
	require('express-session')({
		secret: '65th_square',
		saveUninitialized: false,
		resave: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.deserializeUser(User.deserializeUser());
passport.serializeUser(User.serializeUser());

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});

//ANCHOR ========Mongoose Setup================//

moongose.connect('mongodb://localhost/YelpCampV5', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
seedDB();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

//ANCHOR ==========ROUTES setup===================//

app.get('/', (req, res) => {
	res.render('campground/landing');
});

//NOTE INDEX route - shows all campgrounds
app.get('/campgrounds', (req, res) => {
	console.log(req.user);
	camp.find({}, (err, allcamp) => {
		if (err) {
			console.log(err);
		} else {
			res.render('campground/index', { camp: allcamp, currentUser: req.user });
		}
	});
});

//NOTE  NEW route- displays the form page
app.get('/campgrounds/new', isLoggedIn, (req, res) => {
	res.render('campground/new');
});

//NOTE SHOW route- tell the information

app.get('/campgrounds/:id', (req, res) => {
	camp.findById(req.params.id).populate('comments').exec((err, foundCamp) => {
		if (err) {
		} else {
			res.render('campground/show', { ground: foundCamp });
		}
	});
});

//NOTE CREATE route - add new campground to db
app.post('/campgrounds', isLoggedIn, (req, res) => {
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.desc;
	var newCampground = { name: name, image: image, description: desc };
	camp.create(newCampground, (err, newcamp) => {
		if (err) {
			console.log(err);
		} else {
			console.log('New camp added');
		}
	});
	res.redirect('/campgrounds');
});

//==========NOTE nesting routes ==================

//ANCHOR creating new comment
app.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
	camp.findById(req.params.id, (err, camps) => {
		if (err) {
			console.log(err);
		} else {
			res.render('comment/new', { campground: camps });
		}
	});
});

app.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
	//lookup campground using id
	camp.findById(req.params.id, (err, campgrounds) => {
		if (err) {
			console.log(err);
			res.redirect('/camgrounds');
		} else {
			//create new comment
			Comment.create(req.body.comments, (err, comment) => {
				if (err) {
					console.log(err);
				} else {
					//connect new comment to campground
					campgrounds.comments.push(comment);
					campgrounds.save();

					//redirect to campground show page
					res.redirect('/campgrounds/' + campgrounds._id);
				}
			});
		}
	});
});

app.get('/register', (req, res) => {
	res.render('register');
});

app.post('/register', (req, res) => {
	var username = req.body.username;
	User.register(new User({ username: username }), req.body.password, (err, user) => {
		if (err) {
			console.log(err);
			res.redirect('/register');
		} else {
			passport.authenticate('local')(req, res, () => res.redirect('/campgrounds'));
		}
	});
});

app.get('/login', (req, res) => res.render('login'));

app.post(
	'/login',
	passport.authenticate('local', {
		successRedirect: '/campgrounds',
		failureRedirect: '/login'
	}),
	(err) => {
		if (err) console.log(err);
	}
);

app.get('/logout', (req, res) => {
	req.logOut();
	res.redirect('/');
});

app.listen('5500', () => {
	console.log('Running on port 5500');
});
