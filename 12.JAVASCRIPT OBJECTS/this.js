var comments = {}
comments.data = ["Hey", "Hello", "Goodbye", "LOL", "WTF"]

comments.print = function () {
    this.data.forEach(function (el) {
        console.log(el);
    })
}
comments.print();