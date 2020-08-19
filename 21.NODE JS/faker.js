var faker = require('faker');

for (var i = 0; i < 10; i++) {
	var randomProduct = faker.commerce.productName();
	var randomPrice = faker.commerce.price();
	console.log(randomProduct + ' $' + randomPrice);
}
