function greeting() {
  let username = "Juan";
  function displayUsername() {
    return `Hola ${username}`;
  }
  return displayUsername;
}

const g = greeting();
console.log(g);
console.log(g())