$(".submit").click(function (e) {
    $(this).css("backgroundColor", "red")

});

$("input").keypress(function (e) {
    var code = e.keyCode || e.which
    if (code == 13) {
        alert("You pressed Enter");
    }

})

$("h1").on("click", function () {
    $(this).css("color", "purple")
});

$("button").on("mouseenter",
    function () {
        $(this).css("font-weight", "bold")
    });

$("button").on("mouseleave",
    function () {
        $(this).css("font-weight", "normal")
    });