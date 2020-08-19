const mongoose = require('mongoose');
const CampGround = require('./models/campground');
const Comment = require('./models/comment');
const comment = require('./models/comment');
const user = require('./models/user');

//starter data for inserting new campground by default

var data = [
	{
		name: "Cloud's Rest",
		image: 'https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		name: 'Desert Mesa',
		image: 'https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	},
	{
		name: 'Canyon Floor',
		image: 'https://farm1.staticflickr.com/189/493046463_841a18169e.jpg',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
	}
];

function seedDB() {
	//NOTE removing all campgrounds
	CampGround.deleteMany({}, (err) => {
		if (err) {
			console.log(err.message);
		}
		console.log('Deleted all campgrounds');

		//NOTE deleting all comments
		Comment.deleteMany({}, (err) => {
			if (err) {
				console.log(err.message);
			}
			console.log('Deleted all comments');

			// user.deleteMany({}, (err) => console.log('Deleted all Users'));
		});

		//NOTE adding campground
		data.forEach((seed) => {
			CampGround.create(seed, (err, camground) => {
				if (err) {
					console.log(err.message);
				} else {
					console.log('Added campground');

					//NOTE adding comments
					Comment.create(
						{
							text: 'This is a great place but I wish there was internet',
							author: 'Unknown'
						},
						(err, comment) => {
							if (err) {
								console.log(err.message);
							} else {
								//always use paramter to push the value do not use actual db
								camground.comments.push(comment);
								camground.save();
								console.log('Added Comment');
							}
						}
					);
				}
			});
		});
	});
}

module.exports = seedDB;
