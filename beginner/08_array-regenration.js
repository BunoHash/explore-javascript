var numbers = [12,9,9034,67,1238,856,34,16,2,907];


// 1. Array.filter() : Don't change the base array itself
let oddNumbers = numbers.filter((currentValue, index, array)=>{
    if(currentValue%2) return true;
})
console.log(numbers);
console.log(oddNumbers);

var wizards = [
    {name: 'Harry Potter',house: 'Gryfindor'},
    {name: 'Cedric Diggory',house: 'Hufflepuff'},
    {name: 'Tonks',house: 'Hufflepuff'},
    {name: 'Ronald Weasley',house: 'Gryfindor'},
    {name: 'Hermione Granger',house: 'Gryfindor'}
  ];


// 2. Array.map can operate over output and run operations
let newArray = [];

wizards.filter((wiz)=>{
    return wiz.house== 'Hufflepuff'
}).map((awiz)=>{
    newArray.push(awiz.name);
})

console.log(newArray);

// 3. Array.reduce() : Can return anything, can be used for many ways

var total = numbers.reduce(function (sum, current) {
    return sum + current;
  }, 0);

  console.log(numbers);
  console.log(total);


// 4. 