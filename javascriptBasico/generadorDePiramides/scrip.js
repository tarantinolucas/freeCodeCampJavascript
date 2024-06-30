/* declaracion, asignacion de strings en variables y muestra de variables por consola (hasta ej. 12)

let character = 'Hello';
console.log(character);
character = "World";
let secondCharacter;
secondCharacter = character;
console.log(secondCharacter);

*/

/* declaracion y muestra por consola de variables (hasta ej. 15)

let profession = "teacher";
let age;
console.log(age);
console.log(profession);

*/

/* asignacion de numeros a variables declaradas y operaciones (hasta ej. 17)

let count = 8;
console.log(count + 1);
console.log(count - 1);
console.log(count / 2);
console.log(count * 2);

*/

/* asignacion de arrays a una variable (hasta ej. 24)

let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
rows[2] = 10;
console.log(rows)
rows[rows.length - 1] = 10;
let cities = ["London", "New York", "Mumbai"];
console.log(cities);
cities[cities.length - 1] = "Mexico City";
console.log(cities);

*/

/* ej. 25
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp")
console.log(rows);

// ej. 26
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop()
console.log(popped);

// ej. 27
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped)
console.log(rows);

// ej. 28
rows.push("freeCodeCamp");
let pushed = rows.push();
console.log(pushed)

// ej. 30
let character = "Hello";
let count = 8;
let rows = [];

// ej. 31
const character = "Hello";
const count = 8;
const rows = [];
*/

// ej. 32 en adelante - comenzando con el generador de piramides

const character = "#";
const count = 8;
const rows = [];

function padRow(rowNumber, rowCount) {
  // return name;
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// const call = padRow("Lucas");

for (let i = 0; i < count; i = i + 1) {
  rows.push(padRow(i + 1, count));
}

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);

/* ej. 55

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum)

*/
