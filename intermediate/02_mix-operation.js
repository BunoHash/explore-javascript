
let sumValues = function (a,b){
    return a + b;
}

console.log(typeof(sumValues(3,2)));
console.log(typeof(sumValues(2,"3")));
console.log(sumValues("3"));
console.log(sumValues(3));



// 1. Casting with first value type : number
// 2. For mix type, default value type : string
// 3. not passing value = undefined : output '3undefined'
// 4. Can't add undefined wih number : output 'NaN'