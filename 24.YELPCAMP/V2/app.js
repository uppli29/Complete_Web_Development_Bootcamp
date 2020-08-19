var app = require('express')(),
	bodyParser = require('body-parser'),
	moongose = require('mongoose');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

moongose.connect('mongodb://localhost/YelpCamp', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var campgroundSchema = new moongose.Schema({
	name: String,
	image: String,
	description: String
});

//ANCHOR collection name camp
var camp = moongose.model('camp', campgroundSchema);

// camp.create(
// 	{
// 		name: 'Granite Hill',
// 		image: 'https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg',
// 		description: 'This is the Granite Hill No water here!'
// 	},
// 	(err, camp) => {
// 		if (err) {
// 			console.log(err.message);
// 		} else {
// 			console.log('Inserted');
// 			console.log(camp);
// 		}
// 	}
// );

app.get('/', (req, res) => {
	res.render('landing');
});

//NOTE INDEX route - shows all campgrounds
app.get('/campgrounds', (req, res) => {
	camp.find({}, (err, allcamp) => {
		if (err) {
			console.log(err);
		} else {
			res.render('index', { camp: allcamp });
		}
	});
});

//NOTE  NEW route- displays the form page
app.get('/campgrounds/new', (req, res) => {
	res.render('new');
});

//NOTE SHOW route- tell the information

app.get('/campgrounds/:id', (req, res) => {
	camp.findById(req.params.id, (err, found) => {
		if (err) {
			console.log(err.message);
		} else {
			res.render('show', { ground: found });
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

app.listen('4000', () => {
	console.log('Running on port 4000');
});

camp.find({}, (err, camps) => {
	if (err) {
		console.log(err.message);
	} else {
		console.log(camps);
	}
});
