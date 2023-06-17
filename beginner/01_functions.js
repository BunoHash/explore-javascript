// 3 Ways to define Js functions

//1. Generic function
function multiply(x,y=1) // default value given
{
    return x*y;
}
function findSquare(number){
    return number*number;
}

console.log(findSquare(12))
console.log(multiply(6,34));


//2. Function Expression
const multiplyExpression = function(x,y)
{
     x*y;
     // Without return function returns undefined
}

console.log(multiplyExpression(2,45));


//JS return undefined for no return func

let baulMon = function(er,no)
{
    er+no;
}
console.log(baulMon('err','noo'));


// 3. Fat arrow function: Don't create new executional context

this.name= "HYUNDAI";
let printMessage = ()=>{
    console.log(`It\'s a msg from fat arrow function. Using parent context name: ${this.name}`)
} 
printMessage();

const multiplyBodyLess = (x,y)=> x*y;
let minSquare = (number)=> number*number;


console.log(multiplyBodyLess(2,45));
console.log(minSquare(25));


