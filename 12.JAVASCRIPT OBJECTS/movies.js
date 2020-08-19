var movie = [{
        name: "Inception",
        rating: 4.7,
        hasWatched: true
    },
    {
        name: "Training day",
        rating: 4.0,
        hasWatched: false
    },
    {
        name: "Tenet",
        rating: 4.0,
        hasWatched: false
    }
];

movie.forEach(function (temp) {
    var result = "You have ";
    if (temp.hasWatched) {
        result += "Watched"
    } else {
        result += "not seen"
    }
    console.log(result + " " + temp.name + "--" + temp.rating);
})