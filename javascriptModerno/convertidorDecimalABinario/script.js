// capturamos los elementos del DOM que vamos a utilizar

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

// funcion para convertir el dato ingresado a binario
const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];
  while (input > 0) {
    const quotient = Math.floor(input / 2);
    input = 0;
  }
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
