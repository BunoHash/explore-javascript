var numbers = [12,9,9034,67,1238,856,34,16,2,907];


// 1. Array.slice : create a new array from index range
let sliced = numbers.slice(3,7);
console.log(numbers);
console.log(sliced);


// Array.splice() : changes the original array
// Used to get the array range and insert element in middle

let toInsert = [9,9,9,6,6,6]
let spliced = numbers.splice(2,2,...toInsert);
console.log(spliced);
console.log(numbers);

let splicedAtLast = numbers.splice(-1,0,...toInsert); //skip 1 element from last, remove 0

console.log(splicedAtLast);
console.log(numbers);


// 3. Array.concat() : create new array with adding botha array
let heroes = ["Hulk","Thor","Cap", "Vision"];
let balance = [9,16,25,36];

let seeThat = heroes.concat(balance);
console.log(seeThat);


// 4. Array.push() : add elements in last, ** change the base array
balance.push(heroes);
console.log(balance);