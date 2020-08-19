var btn = document.querySelector("button");


var h1 = document.querySelector("h1");
btn.addEventListener("click", function () {
	h1.textContent = "Welcome!  "
})


var lis = document.querySelectorAll("li")
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", colorChange);
}

function colorChange() {
	this.style.backgroundColor = "yellow";
}