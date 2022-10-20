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
        if (c === 'blue') {
            document.getElementById("event_handling").style.backgroundColor = "black";
        }
        else if (c === 'black') {
            document.getElementById("event_handling").style.backgroundColor = "green";
        }
        else {
            document.getElementById("event_handling").style.backgroundColor = "blue";
        }
    }
}
//# sourceMappingURL=app.js.map