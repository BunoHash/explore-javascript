// Spread Operator breaks the list or object into separate elements
// marge two list:

let oldStudents = ["Ashoka","Anakin","Obi-one"];
let newStudents = ["Luke","Rey","Han Solo"];

let allStudents = [...oldStudents,...newStudents];

// JS array is reference type. Create New Immutable copy:

let newList = [...allStudents];


//grouping parameters in an array
// This is also used to take unknown numbers of parameter, It's called rest operator here

let logThem = (a, b, ...directions) => {
    console.log("a", a);
    console.log("b", b);
    console.log("directions : ", directions);
  }
  
logThem("left", "right", "east", "west", "north", "south");


// Copy an object

let obj = {a: 1, b: 2, c: 3}
let copy = {...obj} // copy is {a: 1, b: 2, c: 3}

// Merge Object
let objOne = {a: 1, b: 2, c: 3}
let objTwo = {c: 5, e: 5, f: 6}

let merge = {...obj1, ...obj2} // merge is {a: 1, b: 2, c: 5, e: 5, f: 6}