var ex = {
    name: "new",
    add: function (x, y) {
        return x + y;
    }
}
console.log(ex.add(2, 4));

var catspeak = {};
catspeak.speak = function() {
    return 'Woof';
}

var dogspeak = {};

dogspeak.speak = function() {
    return 'meow';
}
console.log(catspeak.speak());