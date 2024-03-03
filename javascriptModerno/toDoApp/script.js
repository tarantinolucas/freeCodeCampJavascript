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
};

// creamos funcioin para editar una tarea

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

// agregamos event listeners sobre los elementos

openTaskFormBtn.addEventListener("click", () => {
  // usamos el metodo toggle que permite agregar o quitar una clase, si no existe la agrega y si existe la elimina
  taskForm.classList.toggle("hidden");
});

closeTaskFormBtn.addEventListener("click", () => {
  // revisamos si hay alguna entrada en los campos del formulario de nueva tarea
  const formInputsContainValues =
    titleInput.value || dateInput.value || descriptionInput.value
      ? true
      : false;
  if (formInputsContainValues) {
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
