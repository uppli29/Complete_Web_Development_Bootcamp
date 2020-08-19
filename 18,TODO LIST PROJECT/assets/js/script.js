//NOTE changing the li when clicked i.e linethrough effect

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//NOTE click on X to delete todo

$("span").click(function (event) {

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    })
    //ANCHOR to stop event from bubbling
    event.stopPropagation();
});

//NOTE adding new todo feature

$("input[type=text]").keypress(function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        //adding the newtodo to li
        $("ul").append("<li><span> <i class='fa fa-trash-o' aria-hidden='true'> </i></span>" + newTodo + "</li>")
        newTodo = "";
        $(this).val(newTodo);
    }
});

//NOTE adding new note icon

$(".fa-pencil").click(function () {
    $("input[type='text']").fadeToggle();
});
