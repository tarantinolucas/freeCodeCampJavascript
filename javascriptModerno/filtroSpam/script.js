// Capturamos los elementos del DOM con los que vamos a interactuar

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Creamos variables con las expresiones regulares para filtrar
const helpRegex = /please help|assist me/i;
const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/i;
// Usamos grupos de captura para que las palabras se busquen como partes de oraciones
const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/i;
// Capturamos frases que inicien con un número con 1 o mas digitos, que luego tengan cero o mas espacios, que incluyan o no algunas de las palabras incluidas entre parentesis,
const dollarRegex = /[0-9]+\s*(?:hundred|thousand|million|billion)?\s+dollars/i;
const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/i;

// Creamos un array de expresiones regulares
const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

/* Funcion para verificar si es spam
const isSpam = (msg) => msg.match(helpRegex); */

/* Lo verificamos pero con el metodo test().
const isSpam = (msg) => helpRegex.test(msg); */

// Usamos el método some() para verificar si alguno de los elementos del mensaje coincide con algunos de las expresiones regulares del array denyList.
const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

// Capturamos el evento click sobre el boton "Check Message"
checkMessageButton.addEventListener("click", () => {
  if (messageInput.value == "") {
    alert("Please enter a message.");
    return;
  }

  // Verificamos si el mensaje es spam
  result.textContent = isSpam(messageInput.value)
    ? "Oh no! This looks like a spam message."
    : "This message does not seem to contain any spam.";
  messageInput.value = "";
});
