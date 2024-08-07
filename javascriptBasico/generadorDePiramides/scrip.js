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
const count = prompt("¿De cuantos pisos queres la piramide?");
const rows = [];
let piramide = document.getElementById("piramide")
let inverted = true;

function padRow(rowNumber, rowCount) {
  // return name;
  return (
    " ".repeat(rowCount - rowNumber) +
    character.repeat(2 * rowNumber - 1) +
    " ".repeat(rowCount - rowNumber)
  );
}

// const call = padRow("Lucas");

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}

/* Podemos invertir la piramide solo cambiando el metodo utilizado

for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));  // cambiar push por unshift o inversa
}

*/

let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}
/* Como ya no utilizamos estas variables, podemos eliminarlas.
let continueLoop = false;
let done = 0;
*/

/* Vamos a realizar otro metodo, por el moemnto lo comentamos.

while (rows.length < count) {
  // done++;
  rows.push(padRow(rows.length + 1, count));
  /* Se modifico la condicion del while, podemos no utilizarlo. 
  if (done === count) {
    continueLoop = false;
  }
}

*/

/* Este seria otro metodo para una piramide invertida

for (let i = count; i > 0; i--) {
  rows.push(padRow(i, count));
}

*/

/* Ej. 105 a 109 - metodos de array

const numbers = [1, 2, 3];
const shifted = numbers.shift();
console.log(shifted);
const unshifted = numbers.unshift(5);
console.log(unshifted);
console.log(numbers);

*/

console.log(result); 
//`<p id='piramide'>${result}</p>`

/* ej. 55

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

const sum = addTwoNumbers(5, 10);
console.log(sum)

// ej. 78-79

if (false) {
  console.log("Condition is true");
}

// ej. 80-81
if ("false") { // esta condicion es considerada verdadera
  console.log("Condition is true");
}

if ("") { // esta condicion es considerada falsa
  console.log("Condition is true");
}

// ej. 82-83
if ("") {
  console.log("Condition is true");
} else if (5 > 10) {
  console.log("5 is less than 10");
} else {
  console.log("This is the else block");
}

*/
