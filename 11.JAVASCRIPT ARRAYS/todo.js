var todo = [];
let input = prompt("Enter what you want")
while (input !== "quit") {
    if (input === "new") {
        var add = prompt("Enter your todo")
        todo.push(add);
    } else {
        console.log(todo);
    }
    input = prompt("Enter what you want")
}
alert("Goodbye!")