

// let test1 = "test1";
// let test2 = "test2";

function testVar() {
    var a = 10;

    if(true) {
        var a = 30;
        console.log("Test variable scope -- initialise var a to " + a);
        console.log(a);
    }
    console.log(a);
}

testVar();


function testLet() {
    let a = 10;
    if(true) {
        let a = 30;
        console.log("Output from let scope variable");
        console.log(a);
    }
    console.log(a);
}

testLet();


// Loop for var
try{
    console.log("Loop for var");
    for(var i = 0; i < 10; i++){
        console.log(i);
    }
    console.log(i);
}
catch(e) {
    console.log(e);
}


/// Loop for let
try{
    console.log("Loop for Let");
    for(let i=0;i<10; i++){
        console.log(i);
    }
    console.log(i);
}
catch(e){
    console.log(e);
}

