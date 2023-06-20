let input ="Justice started the war, an eye for an eye."

// indexOf returns the starting index of the first match.
// If no match , returns -1
console.log(input.indexOf('war')); 

// lastIndexOf returns the starting index of the first match.
// If no match , returns -1
console.log(input.lastIndexOf('eye')); 

//charAt finds character with index
console.log(input.charAt(39));

// Concat : concat two string
console.log(input.concat(" War left only misery"));

// replace search for occurrence and replaces first occurrence only
// ReplaceAl , replace all occurrence
console.log(input.replace("eye","butt"));
console.log(input.replaceAll("eye","butt"));


input.trim(' '); // trims
input.split(',') // return an array splitting at input occurrence,
input.toLowerCase() // return a new lowercase string
input.includes('p') // check if it exists
console.log(input.slice(26,38)); // return a substring with index range
console.log(input.substr(26,38)); // return a substring with index range
input.match() // for matching with regular expression 