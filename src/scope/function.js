// Todas las funciones tienen su propio alcance y las variables declaradas dentro de una función son accesibles solo dentro de la misma funcion o sus funciones anidadas
function greeting() {
  let userName = "Ana";
  console.log(userName);

  if (userName === "Ana") {
    console.log(`Hola, ${userName}!`)
  }
}

greeting()
console.log(userName);