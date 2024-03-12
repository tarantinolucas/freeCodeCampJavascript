// capturamos los elementos del DOM que vamos a utilizar

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// funcion de cuenta regresiva
const countdown = (number) => {
  console.log(number);
};

// funcion para convertir el dato ingresado a binario
const decimalToBinary = (input) => {
  let binary = "";
  if (input == 0) {
    binary = "0";
  }
  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }
  result.innerText = binary;
};

// funcion para ver el dato ingresado por el usuario
const checkUserInput = () => {
  // en JS hay algunos valores que son comunmente falsos (los datos nulos, indefinidos, el numero 0 y strings vacias). Aca utilizamos el operador logico NOT para comprobar si el valor es falso

  // alertamos al usuario cuando lo que introduce no es un numero decimal
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }
  decimalToBinary(parseInt(numberInput.value));
  // limpiamos el input de entrada
  numberInput.value = "";
};

// capturamos el evento click del boton "convert"
convertBtn.addEventListener("click", checkUserInput);

// capturamos cuando una tecla se presiona
numberInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});

/* pruebas de como funciona la recursividad

const callStack = [
  `a(): returns "freeCodeCamp " + b()`,
  `b(): returns "is " + c().`,
  `c(): returns "awesome!"`,
];

const a = () => {
  return "Yo " + b();
};

const b = () => {
  return "estoy aprendiendo mucho " + c();
};

const c = () => {
  return "Javascript! Gracias freeCodeCamp!";
};

console.log(a());

*/
