function average(score) {
	var total = 0;
	score.forEach(function(scores) {
		total += scores;
	});
	var average = total / score.length;
	return Math.round(average);
}

var score1 = [ 78, 76, 99, 75, 42, 25 ];
console.log(average(score1));


