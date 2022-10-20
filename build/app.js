"use strict";
var change = document.getElementById("demo");
if (change != null) {
    change.addEventListener("click", turnGreen);
}
/**
 * turns demo green
 */
function turnGreen() {
    if (document != null) {
        var c = document.getElementById("event_handling").style.backgroundColor;
        if (c === 'green') {
            document.getElementById("event_handling").style.backgroundColor = "black";
        }
        else {
            document.getElementById("event_handling").style.backgroundColor = "green";
        }
    }
}
//# sourceMappingURL=app.js.map