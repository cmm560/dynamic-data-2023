var name = "Chanel Menard";

var myNumber = 22;

const port = 3000;
//objects
var car = {
    make:"Audi",
    model:"55",
    year:2023
}
//functions or methods that returns a value
function addTwo(somenumber) {
    return somenumber + 2;
}

//functions that perform a task
function outputsomething(output) {
    console.log("You wrote " + output);
}

outputsomething("Write something here.. I'm having fun with node");

//var result = addTwo(10);

//outputsomething(result);

//outputsomething(addTwo(10));




console.log(car);

//access object properties with "."

outputsomething(car.make);

console.log( "My name is " + name + " My favorite number is " + myNumber );
console.log(name + myNumber);
console.log(myNumber + myNumber);
console.log(myNumber + "22");

