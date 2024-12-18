// capturamos los elementos del DOM que vamos a utilizar

const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

// funcion para chequear el input del usuario
const checkUserInput = () => {
  isEmpty();
};

// funcion para eliminar el texto de los resultados
const clearResults = () => {
  result.textContent = "";
  input.value = "";
};

// funcion que verifica si la entrada esta vacia
const isEmpty = () => {
  if (input.value == "") {
    alert("Please provide a phone number");
    return;
  } else {
    result.textContent = `El texto ingresado es: ${input.value}`;
    return;
  }
};

// capturamos el evento click sobre el boton check
checkBtn.addEventListener("click", checkUserInput);

// capturamos el evento click sobre el boton clear
clearBtn.addEventListener("click", clearResults);
