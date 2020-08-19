var app = require('express')(),
	bodyParser = require('body-parser'),
	moongose = require('mongoose'),
	camp = require('./models/campground'),
	Comment = require('./models/comment'),
	seedDB = require('./seeds');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

moongose.connect('mongodb://localhost/YelpCampV4', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
seedDB();

app.get('/', (req, res) => {
	res.render('campground/landing');
});

//NOTE INDEX route - shows all campgrounds
app.get('/campgrounds', (req, res) => {
	camp.find({}, (err, allcamp) => {
		if (err) {
			console.log(err);
		} else {
			res.render('campground/index', { camp: allcamp });
		}
	});
});

//NOTE  NEW route- displays the form page
app.get('/campgrounds/new', (req, res) => {
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
app.post('/campgrounds', (req, res) => {
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
app.get('/campgrounds/:id/comments/new', (req, res) => {
	camp.findById(req.params.id, (err, camps) => {
		if (err) {
			console.log(err);
		} else {
			res.render('comment/new', { campground: camps });
		}
	});
});

app.post('/campgrounds/:id/comments', (req, res) => {
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

app.listen('2000', () => {
	console.log('Running on port 2000');
});
