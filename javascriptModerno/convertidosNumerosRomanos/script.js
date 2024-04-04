// capturamos los elementos del DOM que vamos a utilizar

const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

// funcion para ver el dato ingresado por el usuario
const checkUserInput = () => {
  isEmpty(number);
  output.classList.toggle("hidden");
  // limpiamos el input de entrada
  number.value = "";
};

// funcion que verifica si la entrada esta vacia
const isEmpty = () => {
  number.value == ""
    ? (output.textContent = `Please enter a valid number`)
    : (output.textContent = `El boton convert o la tecla enter fue pulsada y se estan procesando datos...`);
};

// capturamos cuando se hace click en convert-btn o enter en la pestaña

// evento click sobre convert-btn
convertBtn.addEventListener("click", checkUserInput);

// enter sobre la pestaña
number.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});
