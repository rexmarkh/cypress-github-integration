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
const greeting = (name, greet) => console.log("Hello", name, ", Good", greet)
greeting("Ketan", "Afternoon!")
// you can also have blocks in it
const greetings = (name, greet) => {
    console.log("Hello", name, ", Good", greet)
    greetings("Ketan", "Afternoon!")
}

// Arrays
const friends = ["friend1", "friend2", "friend3"]
console.log(friends)
<<<<<<< HEAD
=======
// another way
>>>>>>> f4192e328038c481a32d8c8da605e06b002f79d6
const teacher = new Array("Teacher1", "Teacher2", "Teacher3")
console.log(teacher)
// arrays are homogenerous
const me = ["Ketan", 22, friends, teacher]
console.log(me)