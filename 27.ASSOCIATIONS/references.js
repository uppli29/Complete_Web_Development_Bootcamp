const mongoose = require('mongoose');
var Post = require('./models/posts');
var User = require('./models/posts');

mongoose.connect('mongodb://localhost/blog_demo_2', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

// User.create({
// 	name: 'Bob',
// 	email: 'bob@gmail.com'
// });

// Post.create(
// 	{
// 		title: 'second comments',
// 		content: 'secondmreferenced object'
// 	},
// 	(err, post) => {
// 		console.log(post);
// 		User.findOne({ name: 'Bob' }, (err, user) => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				user.posts.push(post);
// 				user.save((err, data) => {
// 					if (err) {
// 						console.log(err);
// 					} else {
// 						console.log(data);
// 					}
// 				});
// 			}
// 		});
// 	}
// );

// User.findOne({ name: 'Bob' }).populate('posts').exec((err, data) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(data);
// 	}
// });
