// capturamos los elementos del DOM que vamos a utilizar

const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");
const arabigos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanos = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];

// funcion para ver el dato ingresado por el usuario
const checkUserInput = (number) => {
  isEmpty(number);
  output.classList.remove("hidden");
};

// funcion que verifica si la entrada esta vacia
const isEmpty = () => {
  if (number.value == "") {
    output.textContent = `Please enter a valid number`;
    return;
  } else {
    isZeroOrLess(number);
    return;
  }
};

// funcion que verifica si la entrada es 0 o un numero menor
const isZeroOrLess = () => {
  if (number.value <= 0) {
    output.textContent = `Please enter a number greater than or equal to 1`;
    return;
  } else {
    isGreaterNumber(number);
    return;
  }
};

// funcion que verifica si la entrada es 3999 o un numero mayor
const isGreaterNumber = () => {
  if (number.value >= 4000) {
    output.textContent = `Please enter a number less than or equal to 3999`;
    return;
  } else {
    convertToRoman(number);
    return;
  }
};

// funcion que verifica el numero y lo convierte
const convertToRoman = (number) => {
  let result = "";
  let num = number.value;
  for (let i = 0; i < arabigos.length; i++) {
    while (num >= arabigos[i]) {
      num -= arabigos[i];
      result += romanos[i];
    }
  }
  output.textContent = result;
};

// capturamos el evento click sobre convert-btn
convertBtn.addEventListener("click", checkUserInput);
