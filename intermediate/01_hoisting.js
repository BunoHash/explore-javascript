// Hoisting Happens for variables and function using only 'var'


console.log(add(2,3));
//console.log(addExpression(12,12));
console.log(addExpressionEs6);

console.log(logBase) // LogBase declaration is hoisted, value is undefined
console.log(myName); // Error: Keyword is hoisted, but accessing value will give error to keep ES6 standard
console.log(jenny.name) // Jenny is hoisted, but the value is undefined : Error to access property


var logBase =2;
const myName = "Sayed";
var jenny ={
    name: "Jenelia de Costa",
    age: 43,
    address: "Dhaka, Bangladesh"
}


// function and var get hoisted, you can call it before declaration
function add(x,y){
    return x+y;
}
//function expression get hoisted as a variable, calling before declaration will give error
var addExpression = function(x,y){
    return x+y;
}
// const/let hoist variable, error not initialized to keep ES6 standard
let addExpressionEs6 = function(x,y){
    return x+y;
}

