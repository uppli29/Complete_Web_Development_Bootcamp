var app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var campGround = [
	{ name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg' },
	{ name: 'Granite Hill', image: 'https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg' },
	{ name: "Mountain Goat's Rest", image: 'https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg' },
	{ name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg' },
	{ name: 'Granite Hill', image: 'https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg' },
	{ name: "Mountain Goat's Rest", image: 'https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg' },
	{ name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg' },
	{ name: 'Granite Hill', image: 'https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg' },
	{ name: "Mountain Goat's Rest", image: 'https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg' }
];

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/campgrounds', (req, res) => {
	res.render('campground', { camp: campGround });
});

app.get('/campgrounds/new', (req, res) => {
	res.render('new');
});

app.post('/campgrounds', (req, res) => {
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = { name: name, image: image };
	campGround.push(newCampground);
	res.redirect('/campgrounds');
});

app.listen('5000', () => {
	console.log('Started at 5000');
});
