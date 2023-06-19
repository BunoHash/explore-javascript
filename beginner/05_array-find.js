var numbers = [12,9,9034,67,1238,856,34,16,2,907];

//Array.Find(): Traverse the array until something is returned

let firstOddNumber = numbers.find((currentValue, currentIndex, array)=>{

    // can change the array 
    //array[currentIndex+1] = currentValue+ array[currentIndex+1];
    console.log(currentValue);
    if(currentValue%2) return currentValue;
})

console.log(`The first odd number is: ${firstOddNumber}`);



//Array.findIndex() and Array.indexOf()
let valueNeedToFind = 34;

let findIndexResult = numbers.findIndex((currentValue, currentIndex, array)=>{
    if (currentValue === valueNeedToFind) return currentIndex;
})

let indexToStartFrom =0 ;
let indexOfResult = numbers.indexOf(valueNeedToFind,indexToStartFrom); // 

console.log(`findIndex ${findIndexResult} : indexOf: ${indexOfResult}`);
