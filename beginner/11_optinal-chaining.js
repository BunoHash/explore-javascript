// Optional chaining helps to reduce error and exception
// accessing Non-mandatory property or property of a undefined object can create an issue.
// This is a must follow coding practice, for developing projects


const user = {
    name : 'cortana',
    age: 32
}


let isSex = user?.sex?.marry // undefined : no break of operation


console.log(isSex);
let sex = user.sex.marry// this will throw an error