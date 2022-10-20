/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo green
 */
function turnGreen() {
    var change = document.getElementById("demo");
    change.addEventListener("click", function () {
        if (document != null) {
            var c = document.getElementById("demo").style.color;
            if (c === 'green') {
                document.getElementById("event_handling").style.backgroundColor = "black";
            }
            else {
                document.getElementById("event_handling").style.backgroundColor = "green";
            }
        }
    });
}
export { hello, turnGreen };
//# sourceMappingURL=app.js.map