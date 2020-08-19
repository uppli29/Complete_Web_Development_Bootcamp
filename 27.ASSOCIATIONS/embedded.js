const moongose = require('mongoose');

moongose.connect('mongodb://localhost/blog_demo', {
	useUnifiedTopology: true,
	useNewUrlParser: true
});

var postSchema = moongose.Schema({
	title: String,
	content: String
});

var Post = moongose.model('Post', postSchema);

// var newPost = new Post({
// 	title: 'First comment',
// 	content: 'Hello world'
// });

// newPost.save((err, post) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log(post);
// 	}
// });

var userSchema = new moongose.Schema({
	name: String,
	email: String,
	posts: [ postSchema ]
});

var User = moongose.model('User', userSchema);

// var newUser = new User({
// 	name: 'Upplee',
// 	email: 'upplidell@gmail.com'
// });

// newUser.posts.push({
// 	title: 'first comment',
// 	content: 'This is my first embedded comment'
// });

// newUser.save((err, user) => {
// 	if (err) {
// 		console.log(err);
// 	} else {
// 		console.log('Inserted');
// 	}
// });

User.findOne({ name: 'Upplee' }, (err, user) => {
	if (err) {
		console.log(err.message);
	} else {
		user.posts.push({
			title: 'Third Comment',
			content: 'This is the third comment using findOne'
		});
		user.save((err, found) => {
			if (err) {
				console.log(err);
			} else {
				console.log(found);
			}
		});
	}
});
