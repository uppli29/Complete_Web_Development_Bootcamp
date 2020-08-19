const mongoose = require('mongoose');

mongoose.connect(' mongodb://localhost/cats', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('connected')).on('error', (error) => {
	console.log(error.message);
});

//NOTE defining pattern for database
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	date: { type: Date, default: Date.now },
	tempermanent: String
});

var cat = mongoose.model('cat', catSchema);

var george = new cat({
	name: 'Nancy',
	age: 5,
	tempermanent: 'any'
});

//NOTE cat is from the db
george.save(function(err, cat) {
	if (err) {
		console.log('something went wrong');
	} else {
		console.log(cat);
	}
});

cat.create(
	{
		name: 'Snow White',
		age: 11,
		tempermanent: 'nice'
	},
	(err, cat) => {
		if (err) {
			console.log('Cannot be inserted');
		} else {
			console.log('Inserted');
		}
	}
);

cat.find({}, (err, cats) => {
	if (err) {
		console.log('Something went wrong');
	} else {
		console.log(cats);
	}
});
