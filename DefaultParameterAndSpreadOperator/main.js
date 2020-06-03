// Default parameter and spread operator


// Default functions
function greet($greeting = "Hello World"){
    console.log($greeting);
}

greet();


// Spread Operators

let arg1 = [1, 2, 3];
let arg2 = [4, 5, 6];

function test() {
    console.log(arg1);
}

//ES5 format 
// test.apply(null, arg1);

// ES6
function testES6(){
    console.log(arg1 + "," +arg2);
}

testES6(...arg1, ...arg2);