// Var
var firstName; // undefined -- declaración.
firstName = "Juan"; // asignación/inicialización.
console.log(firstName);

var lastName = "Reyes"; // declaración+asignación/inicialización.
lastName = "Ortiz"; // reasignación/reinicialización.

var secondName = "Alberto"; // declaración+asignación/inicialización.
var secondName = "Ana"; // redeclaración+reasignación/reinicialización.
console.log(secondName);

// Let
let fruit = "Apple"; // declaración+asignación/inicialización.
fruit = "Kiwi"; // reasignación/reinicialización.
console.log(fruit);
// let fruit = "Banana"; || error, la palabra reservada 'Let' no permite la redeclaración.

// Const
const animal = "Dog"; // declaración+asignación/inicialización.
// animal = "Cat"; || error, la palabra reservada 'Const' no permite la reasignación.
// const animal = "Bird"; || error, la palabra reservada 'Const' no permite la redeclaración.
console.log(animal)

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);