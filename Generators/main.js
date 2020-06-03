// Generators can have multiple start and stops

function *g1() {
    console.log("Hello");
    yield "Yeild 1 ...";
    console.log("Hello");
    yield "Yeild2 ...";
    return "Returned";
}

var g = g1();
// console.log(g.next().value);
// console.log(g.next());
// console.log(g.next());

for(let val of g) {
    console.log(val);
}