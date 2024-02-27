// Capturamos los elementos del DOM que vamos a utilizar
const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const textResult = document.getElementById("result");

// Capturamos lo que se escribe en el input

let textInputSended = "";

// Enviamos la informacion escrita en el input

checkButton.addEventListener("click", () => {
  textInputSended = textInput.value;
  isEmpty(textInputSended);
});

// Eliminamos todos los caracteres no alfanumericos (puntuacion, espacios y simbolos)

function createAlphanumerical(str) {
  const regex = /[a-zA-Z0-9]/g;
  const matchRegex = str.match(regex);
  const textArray = matchRegex.toString();
  const textArrayReverse = matchRegex.reverse().toString();

  // Convertimos todo el input en mayuscula para analizarlo

  const textOutput = textArray.replaceAll(",", "").toUpperCase();
  const textOutputReverse = textArrayReverse.replaceAll(",", "").toUpperCase();
  positionCompare(textOutput, textOutputReverse);
}

// Vericamos que el primer elemento del string y su opuesto en posicion sean iguales

function positionCompare(a, b) {
  textResult.classList.remove("hide");
  if (a === b) {
    textResult.innerHTML = `<p><b>${textInput.value}</b> is a palindrome.</p>`;
  } else {
    textResult.innerHTML = `<p><b>${textInput.value}</b> is not a palindrome.</p>`;
  }
}

// Validamos la informacion escrita en el input
function isEmpty(str) {
  if (str == "") {
    textResult.classList.add("hide");
    alert("Please input a value");
    return;
  } else {
    createAlphanumerical(textInputSended);
  }
}
