/* 
Object is a base tye of JavaScript. 
Nearly all objects in JavaScript are instances of Object, if you don't specify other types
A typical object inherits properties (including methods) from Object.prototype
*/

// 0. Object can be created with Object() constructor

let newThing = new Object(10)

const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true


// Object.assign() : copies all enumerable own properties from one or more source objects to a target object
// Returns the target object:

const target = { a: 1, b: 2 };
const source = { 
    b: 4, c: 5, n:{ cr7:38, lm10: 35} };

const returnedTarget = Object.assign(target, source);
console.log(target);


// 1. Object.create() : Create new instance
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);
me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

person.printIntroduction();
me.printIntroduction(); // Expected output: "My name is Matthew. Am I human? true"


// 2. Object.freeze the first level of properties.
Object.freeze(source);
source.c = 76;
source.newProperty = "anything";
source.n.lm10 = 45;
console.log("Lm10: "+source.n.lm10); // lm10 value changed because its 2nd level property
console.log(Object.isFrozen(source)) // Isfrozen Checks


// 3. Object.seal Object.seal makes an object non-extensible. 
// This means that new properties cannot be added to the object, but existing properties can be modified.
Object.seal(target);
target.newProp = "hola";
console.log(target.newProp);
console.log(Object.isSealed(target)) // IsSealed Checks

// 4. Object.entries() : Get Iterable properties


for (const [key, value] of Object.entries(source)) {
    console.log(`${key}: ${value}`);
}



//  5. HasOwn: The Object.hasOwn() static method returns true,
// if the specified object has the indicated property as its own property. 
console.log(Object.hasOwn(source, 'n'));
console.log(Object.hasOwn(source, 'age'));