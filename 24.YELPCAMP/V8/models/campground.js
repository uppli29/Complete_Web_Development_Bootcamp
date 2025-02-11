const mongoose = require('mongoose');

var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String,
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Comment'
		}
	]
});

//ANCHOR collection name camp
module.exports = mongoose.model('campground', campgroundSchema);
