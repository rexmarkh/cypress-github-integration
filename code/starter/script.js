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