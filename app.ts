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
            document.getElementById("demo").style.color = "black";
        }else{
            document.getElementById("demo").style.color = "green";
        }
    }    
}

export {hello, turnGreen}