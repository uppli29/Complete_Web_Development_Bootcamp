var secretNumber = 10;
var found = false;

while (!found) {
  var userNumber = Number(prompt("Enter a number"));
  if (secretNumber === userNumber) {
    alert("Your guess is correct");
    found = true;
  } else if (userNumber > secretNumber) {
    alert("Guess is too high");
  } else {
    alert("Guess again");
  }
}
