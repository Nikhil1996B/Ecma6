// Set , Map, weakSet , weakMap

let myArray = [11, 22, 44, 56];

var set = new Set(myArray);

set.add("100");
set.add({a:1, B:1});
set.delete(22);
// set.clear();
// console.log(set);

// set.forEach(function(val) {
//     console.log(val);
// });


var map = new Map([['A', '1']]);
map.set('c', '2');

// console.log(map);

// weakSet

let carWeakSet = new WeakSet();

let myCar1 = {
    make: 'BMW',
    model: 'High class'
};

carWeakSet.add(myCar1);

let myCar2 = {
    make: 'Audi',
    model: 'Q4'
};

carWeakSet.add(myCar2);
// carWeakSet.delete(myCar1);



console.log(carWeakSet);