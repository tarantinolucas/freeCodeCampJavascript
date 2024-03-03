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

// creamos una variable para guardas las tareas y datos asociados. La iniciamos con los objetos guardados en el localStorage o vacio en caso de no tener niguno

const taskData = JSON.parse(localStorage.getItem("data")) || [];

// creamos una variable para realizar el seguimiento del estado al editar y descartar tareas

let currentTask = {};

/* agregamos un array con ejemplos para utilizar los metodos del localStorage

const myTaskArr = [
  { task: "Walk the Dog", date: "22-04-2022" },
  { task: "Read some books", date: "02-11-2023" },
  { task: "Watch football", date: "10-08-2021" },
];

comentamos todo el codigo porque ya hicimos las pruebas necesarias con el

*/

// funcion para agregar o editar una tarea

const addOrUpdateTask = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  // verificamos si el id de tarea ya existe en el array
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  // tomamos el valor del input y creamos un id para la tarea a agregar
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`, // usamos Date.now() para crear un id aun mas unico
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };

  // si dataArrIndex es estritamente igual a 1 es, es porque la tarea no existe y la agregamos al arr taskData
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  } else {
    taskData[dataArrIndex] = taskObj;
  }

  // almacenamos en el localStorage las tareas del usuario
  localStorage.setItem("data", JSON.stringify(taskData));

  updateTaskContainer();
  reset();
};

// funcion para mostrar las tareas en el DOM

const updateTaskContainer = () => {
  // borramos el updateTasksContainer para que no se dupliquen las tareas cuando agregamos una
  tasksContainer.innerHTML = "";
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button type="button" class="btn" onclick="editTask(this)">Edit</button>
          <button type="button" class="btn" onclick="deleteTask(this)">Delete</button>
        </div>
      `;
  });
};

// creamos funcion para eliminar una tarea

const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    // parentElement se usa para acceder al nodo padre de un elemento
    (item) => item.id === buttonEl.parentElement.id
  );
  // eliminamos la tarea del DOM y tambien del array taskData
  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);

  // actualizamos el objeto data de localStorage una vez que eliminamos la tarea del taskData
  localStorage.setItem("data", JSON.stringify(taskData));
};

// creamos funcion para editar una tarea

const editTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );
  currentTask = taskData[dataArrIndex];
  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;
  addOrUpdateTaskBtn.innerText = "Update Task";
  taskForm.classList.toggle("hidden");
};

// creamos una funcion para limpiar los campos del formulario
const reset = () => {
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
};

// verificamos el contenido del data de localStorage y actualizamos el contenido
if (taskData.length) {
  updateTaskContainer();
}

// agregamos event listeners sobre los elementos

openTaskFormBtn.addEventListener("click", () => {
  // usamos el metodo toggle que permite agregar o quitar una clase, si no existe la agrega y si existe la elimina
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  // revisamos si hay alguna entrada en los campos del formulario de nueva tarea
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value;

  // revisamos si hubo algun cambio en el formulario
  const formInputValuesUpdated =
    titleInput.value !== currentTask.title ||
    dateInput.value !== currentTask.date ||
    descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

cancelBtn.addEventListener("click", () => {
  // usamos el elemento HTML dialog, tiene un metodo para cerrar el modal abierto anteriormente
  confirmCloseDialog.close();
});

discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

taskForm.addEventListener("submit", (e) => {
  // usamos prevent default para evitar que el navegador actualice la pagina despues de enviar el formulario
  e.preventDefault();
  addOrUpdateTask();
});

/* Pruebas de localStorage y sus metodos... (Ej. 55)


// utilizamos el localStorage para almancenar datos, podemos chequearlo desde f12 o herramientas de desarrollador en el navegador > aplicacion > sitio web desde donde se este subiendo

// utilizamos el metodo JSON.stringify() para convertir el dato ingresado (que es un array de objetos) en un string
localStorage.setItem("data", JSON.stringify(myTaskArr));

// utilizamos el metodo get para obtener dato guardado en el localStorage
const getTaskArr = localStorage.getItem("data");
console.log(getTaskArr);

// cuando obtuvimos el dato en el paso anterior, lo obtuvimos modificado (convertido en string por JSON.stringify()), ahora lo volvemos a su estado original

const getTaskArrObj = JSON.parse(localStorage.getItem("data"));
console.log(getTaskArrObj);

usamos el metodo remove() para eliminar el item seleccionado de localStorage

localStorage.removeItem("data");

//comentamos el metodo anterior y utilizamos el metodo clear() que elimina todo el contenido del localStorage

localStorage.clear();


...Fin de pruebas de localStorage y sus metodos

*/
