var h1 = document.querySelector("h1");
h1.style.color = "red";

var body = document.querySelector("body");
var changed = false;
setInterval(function () {
    if (changed) {
        body.style.background = "white";
    } else {
        body.style.background = "blue";
    }
    changed = !changed;
}, 3000);

document.get