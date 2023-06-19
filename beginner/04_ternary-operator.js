let adultAge =18;
let reader = {
    name : 'samuel',
    phone: '902323121',
    age: 14
}

if(reader.age>=adultAge){
    console.log('Adult');
}else if(reader.age<13){
    console.log('Child');
}
else console.log('Teen');


let age = reader.age;
let maturity = age>17? 'Adult': age >12 ? 'Teen' : 'Child'
console.log(maturity);

let isAdult = age>17;
console.log(`${reader.name} is Adult, It's ${isAdult}`)