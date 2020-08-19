window.setTimeout(function () {
    var todo = [];
    let input = prompt("Enter what you want")
    while (input !== "quit") {
        if (input === "new") {
            var add = prompt("Enter your todo")
            todo.push(add);
        } else if (input === "delete") {
            var index = prompt("Enter index you want to delete")
            todo.splice(index, 1);
        } else if (input === "list") {
            todo.forEach(function (list, i) {
                console.log(i + ": " + list);
            });
        }
        input = prompt("Enter what you want")
    }
    alert("Goodbye!")
}, 500);