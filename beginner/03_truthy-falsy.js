// Using a value in conditional statement cast the value into true/false
// In JavaScript evaluated values can be true/false in many cases

// Falsy Values: Empty String, Number Zero, False Value, NaN, Undefined, null;

let anyString = "anyString";
let emptyString = '';
let trueString = "true";
let trueValue = true;
let falseString = 'false';
let falseValue = false;

if(anyString) console.log(`anyString is truthy`);
else console.log(`anyString is falsy`);

if(emptyString) console.log(`emptyString is truthy`);
else console.log(`emptyString is falsy`);

if('0') console.log(`'0' is truthy`);
else console.log(`'0' is falsy`);

if(falseString) console.log(`falseString is truthy`);
else console.log(`falseString is falsy`);

if(undefined) console.log(`undefined is truthy`);
else console.log(`undefined is falsy`);

if(null) console.log(`null is truthy`);
else console.log(`null is falsy`);

if(NaN) console.log(`NaN is truthy`);
else console.log(`NaN is falsy`);



