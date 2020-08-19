let fname = prompt("Enter your fname");
let lname = prompt("Enter your lname");
let age = prompt("Enter your age");
let height = prompt("Enter your height in cm");
let pname = prompt("Enter your pet naem");

var fcond = null;
var lcond = null;
var acond = null;
var hcond = null;
var pcond = null;

if (fname[0] === lname[0]) {
    fcond = true;
} else {
    fcond = false;
}

if (age > 20 && age < 30) {
    acond = true;
} else {
    acond = false;
}

if (height > 160 && height < 170) {
    hcond = true;
} else {
    hcond = false;
}

if (pname.endsWith("y")) {
    pcond = true;
} else {
    pcond = false;
}

if (fcond && acond && hcond && pcond) {
    alert("Welcome now write a message to spy!")
    let msg = prompt("Leave sectet msg");
    console.log(msg);
} else {
    alert("sorry you failed");
}