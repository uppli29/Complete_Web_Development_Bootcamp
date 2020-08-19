const express = require('express');

var camp = require('../models/campground'),
	Comment = require('../models/comment');

var router = express.Router();

function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

//ANCHOR creating new comment
router.get('/campgrounds/:id/comments/new', isLoggedIn, (req, res) => {
	camp.findById(req.params.id, (err, camps) => {
		if (err) {
			console.log(err);
		} else {
			res.render('comment/new', { campground: camps });
		}
	});
});

router.post('/campgrounds/:id/comments', isLoggedIn, (req, res) => {
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
					comment.author.id = req.user._id;
					comment.author.username = req.user.username;
					comment.save();
					console.log(comment);
					campgrounds.comments.push(comment);
					campgrounds.save();

					//redirect to campground show page
					res.redirect('/campgrounds/' + campgrounds._id);
				}
			});
		}
	});
});

module.exports = router;
