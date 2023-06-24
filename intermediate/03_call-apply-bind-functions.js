/*
The Function object provides methods for functions.
In JavaScript, every function is actually a Function object.
Similar to Object, the Function is base for all function

Function has some default methods, which are inherited by all functions.
Eg: bind(), call(), apply()
*/


// explicit binding

let printProgress = function(result){
    console.log(`${this.name} has ${result}, Completed: ${this.completed}%`);
}

let sayed = { name: "sayed", completed: 30};
let kutub = { name: "kutub", completed: 50};


// Function.Call is a prototype function, It change the execution context with passing value/object
// Additional parameter can be passed after the base value.
printProgress.call(sayed, "Failed");
printProgress.call(kutub, "Passed");

// The bind() method creates a new function that, when called, has its this keyword set to the provided value
// The this scope is set by the bind()
const module = {
    x: 42,
    getX: function() {
      return this.x;
    }
  };
  
const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // Expected output: 42

// apply() function is almost identical to call(), except that the function arguments 
// are passed to call() individually as a list, while for apply() they are combined in one object
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2
