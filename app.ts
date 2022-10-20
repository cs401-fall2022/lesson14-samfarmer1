/**
 * This returns the string hello
 * @returns the String hello
 */
 function hello (): String {
    return "Hello World";
};

/**
 * turns demo green
 */
 function turnGreen() {
    if(document != null){
        let c = document.getElementById("demo").style.color;
        if(c === 'green'){
            document.getElementById("event_handling").style.backgroundColor = "black";
        }else{
            document.getElementById("event_handling").style.backgroundColor = "green";
        }
    }    
}

export {hello, turnGreen}