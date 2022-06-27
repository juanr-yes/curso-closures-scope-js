// variables

var a; // declaración
var b = "b"; // declaración + asignación / inicialización
b = "bb"; // reasignación / reinicialización;
var a = "aa"; // redeclaración + asignación / inicialización

// Global Scope
var fruit = "Apple"; // global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // asginación/inicialización, por lo que se convierte en global
  console.log(country);
}

countries();
console.log(country);