// Capturamos los elementos del DOM con los que vamos a interactuar

const messageInput = document.getElementById("message-input");
const result = document.getElementById("result");
const checkMessageButton = document.getElementById("check-message-btn");

// Creamos variables con las expresiones regulares para filtrar
const helpRegex = /please help/i;

// Funcion para verificar si es spam
const isSpam = (msg) => msg.match(helpRegex);

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
