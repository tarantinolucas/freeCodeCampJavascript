// vamos a construir una aplicacion de lista de tareas

// capturamos los elementos del DOM que vamos a utilizar para la APP

const taskForm = document.getElementById("task-form");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// creamos una variable para guardas las tareas y datos asociados

const taskData = [];

// creamos una variable para realizar el seguimiento del estado al editar y descartar tareas

let currentTask = {};

// agregamos event listeners sobre los elementos

openTaskFormBtn.addEventListener("click", () => {
  // usamos el metodo toggle que permite agregar o quitar una clase, si no existe la agrega y si existe la elimina
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  confirmCloseDialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  // usamos el elemento HTML dialog, tiene un metodo para cerrar el modal abierto anteriormente
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  taskForm.classList.toggle("hidden");
});

taskForm.addEventListener("submit", (e) => {
  // usamos prevent default para evitar que el navegador actualice la pagina despues de enviar el formulario
  e.preventDefault();
});
