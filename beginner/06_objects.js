//Using function to create object
// Also called constructor function

function student(name, classNo, roll){

    this.name = name;
    this.classNo = classNo;
    this.roll = roll;
}

const babul = new student('Babul',4,32);
console.log(babul.roll);


const person = function (name, classNo, roll){
    return{
        name: name,
        classNo: classNo,
        roll: roll,
    }
}

const riyon = person("Riyon", 5, 1);
console.log("riyon in class: "+ riyon.classNo);