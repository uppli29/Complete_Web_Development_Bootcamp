const express = require('express');
var router = express.Router();
var camp = require('../models/campground');

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

router.get('/', (req, res) => {
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
router.get('/new', isLoggedIn, (req, res) => {
	res.render('campground/new');
});

//NOTE SHOW route- tell the information

router.get('/:id', (req, res) => {
	camp.findById(req.params.id).populate('comments').exec((err, foundCamp) => {
		if (err) {
		} else {
			res.render('campground/show', { ground: foundCamp, currentUser: req.user });
		}
	});
});

//NOTE CREATE route - add new campground to db
router.post('/', isLoggedIn, (req, res) => {
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

module.exports = router;
