var Player1 = prompt('Enter PlayerOne Name You will play Blue');
var playerOneColor = 'rgb(86, 151, 255)';

var Player2 = prompt('Enter PlayerOne Name You will play Red');
var playerTwoColor = 'rgb(237, 45, 73)';
var currentPlayer = 1;
var currentName = Player1;
var currentColor = playerOneColor;

var gameOn = true;
var table = $('table tr');

function changeColor(rowIndex, colIndex, color) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color', color);
}

function returnColor(rowIndex, colIndex) {
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex) {
	var colorReport = returnColor(5, colIndex);
	for (var row = 5; row >= 0; row--) {
		colorReport = returnColor(row, colIndex);
		if (colorReport === 'rgb(128, 128, 128)') {
			return row;
		}
	}
}

function colorMatchCheck(one, two, three, four) {
	return one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined;
}

function horizontalWinCheck() {
	for (var row = 0; row < 6; row++) {
		for (var col = 0; col < 4; col++) {
			if (
				colorMatchCheck(
					returnColor(row, col),
					returnColor(row, col + 1),
					returnColor(row, col + 2),
					returnColor(row, col + 3)
				)
			) {
				alert('Horizontal Wins');
				return true;
			} else {
				continue;
			}
		}
	}
}

function veticalWinCheck() {
	for (var col = 0; col < 7; col++) {
		for (var row = 0; row < 3; row++) {
			if (
				colorMatchCheck(
					returnColor(row, col),
					returnColor(row + 1, col),
					returnColor(row + 2, col),
					returnColor(row + 3, col)
				)
			) {
				alert('Vertical Win');
				return true;
			} else {
				continue;
			}
		}
	}
}

function diagonalWinCheck() {
	for (var col = 0; col < 5; col++) {
		for (var row = 0; row < 7; row++) {
			if (
				colorMatchCheck(
					returnColor(row, col),
					returnColor(row + 1, col + 1),
					returnColor(row + 2, col + 2),
					returnColor(row + 3, col + 3)
				)
			) {
				alert('Diagonal Win');
				return true;
			} else if (
				colorMatchCheck(
					returnColor(row, col),
					returnColor(row - 1, col + 1),
					returnColor(row - 2, col + 2),
					returnColor(row - 3, col + 3)
				)
			) {
				alert('Diagonal Win');
				return true;
			} else {
				continue;
			}
		}
	}
}

$('h3').text(player1 + " it's your turn pick a column to drop in!");
$('.board button').on('click', function() {
	var col = $(this).closet('td').index();
	var bottomAvail = checkBottom(col);
	changeColor(bottomAvail, col, currentColor);
	if (horizontalWinCheck() || veticalWinCheck() || diagonalWinCheck()) {
		$('h1').text(currentName + ' you won!');
		$('h2').fadeOut('fast');
		$('h3').fadeOut('fast');
	}
	currentPlayer *= -1;
	if (currentPlayer === 1) {
		currentName = Player1;
		$('h3').text(player1 + " it's your turn pick a column to drop in!");
		currentColor = playerOneColor;
	} else {
		currentName = Player2;
		currentColor = playerTwoColor;
		$('h3').text(player2 + " it's your turn pick a column to drop in!");
	}
});
