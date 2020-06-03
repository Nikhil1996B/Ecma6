// Arrow function replaces the keyword function to an arrow syntax and prevents a few extra key strokes.
// It also helps in using lexical this in the case.

function Prefixer(prefixer) {
    this.prefixer = prefixer;
}

Prefixer.prototype.PrefixerArray = function (arr) {
    return arr.map((x)=> {
        console.log(this.prefixer + x);
    });
};

let prefix = new Prefixer("Hello");
prefix.PrefixerArray(["Human"]);


let add = (a, b) => {
    let sum = a + b;
    console.log(sum);
    return false;
}
add(10, 11);