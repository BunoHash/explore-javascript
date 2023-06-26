
// All types except Object type is primitive types, 
// Primitive types are immutable in JavaScript. That means, even if you change the value the storage pointer is not changed
// New value replace the old value in same memory space

/* Primitive Types: 

1. Null
2. Undefined
3. Boolean
4. Number
5. BihInt
6. String
7. Symbol

*/

null, undefined , Boolean, Number, BigInt, String,Symbol;

// Reference Type in Object , Array and complex types. these are Mutable
// in JS mutable means the memory pointer changes with new value assignment, new value stored in new memory 

let values = ["Kodak","Canon","Pentax"];
let newValues = values; // ref to the same object : Mutable
