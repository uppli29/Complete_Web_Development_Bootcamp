function isEven(num) {
  return num % 2 === 0;
}
function factorial(num) {
  if (num === 0) {
    return 1;
  }
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}
function kabeb_to_snake(name) {
  return name.replace("-", "_");
}
var ans = isEven(7);
console.log(ans);
console.log("Factorial of 0 is " + factorial(0));
console.log("Hello-world =" + kabeb_to_snake("Hello-world"));
