var m1 = document.querySelector("p");
m1.classList.add("big")
m1.textContent = "I am changed";

var last = document.getElementById("last");
last.innerHTML = "last changed using innerHTML";

var img = document.getElementsByTagName("img")[0];
img.setAttribute("src", "https://images.unsplash.com/photo-1576670263020-7842552c87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80");