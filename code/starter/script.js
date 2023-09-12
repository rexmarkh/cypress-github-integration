'use strict'
// function without a name is anonymous function
// function call after declaration possible below
printF();
function printF() {
    console.log("Hello WOrld");
}
const num = function myNum() {
    return 30;
}
let num1 = num
console.log(num1);
// arrow functions
const sayHello = name => console.log("Hello", name);
sayHello("Ketan")
const greetings = (name, greet) => console.log("Hello", name, ", Good", greet)
greetings("Ketan", "Afternoon!")
// you can also have blocks in it
const greetings = (name, greet) => {
    console.log("Hello", name, ", Good", greet)
    greetings("Ketan", "Afternoon!")
}