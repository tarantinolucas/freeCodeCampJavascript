// capturamos los elementos del DOM que vamos a utilizar

const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");
const animationData = [
  {
    inputVal: 5,
    marginTop: 300,
    addElDelay: 1000,
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,
    removeElDelay: 20000,
  },
  {
    inputVal: 2,
    marginTop: -200,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    marginTop: -200,
    addElDelay: 2000,
    msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 5000,
    removeElDelay: 10000,
  },
];

/* 


funcion de cuenta regresiva aplicando recursividad

const countDownAndUp = (number) => {
  console.log(number);

  if (number === 0) {
    console.log("Reached base case");
    return;
  } else {
    countDownAndUp(number - 1);
    console.log(number);
  }
};

// probando la funcion recursiva
countDownAndUp(3);


*/

// funcion para convertir el dato ingresado a binario
const decimalToBinary = (input) => {
  // aplicamos recursividad sobre el dato ingresado
  if (input === 0 || input === 1) {
    // agregamos dos casos bases, si es 0 o 1 convertir el dato en string y devolverlo
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
  /* 
  Comentamos esta funcion ya que vamos a usar recursividad para resolver el conflicto
  
  let binary = "";
  if (input == 0) {
    binary = "0";
  }
  while (input > 0) {
    binary = (input % 2) + binary;
    input = Math.floor(input / 2);
  }
  result.innerText = binary;

  */
};

// funcion para mostrar paso a paso del programa
const showAnimation = () => {
  result.innerText = "Call Stack Animation";
  animationData.forEach((obj) => {
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" style="margin-top: ${obj.marginTop}px;" class="animation-frame">
        decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);

    setTimeout(() => {
      result.textContent = decimalToBinary(5);
    }, 20000);
  });
  /* 

Comentamos las pruebas que hicimos de setTimeOut 

  // agregamos 500ms a que muestre free
  setTimeout(() => {
    console.log("free");
  }, 500);
  // agregamos tiempo con setTimeout para que demore 1 segundo en mostrar el mensaje de "Code"
  setTimeout(() => {
    console.log("Code");
  }, 1000);
  // agregamos 1.5s para que muestre "Camp"
  setTimeout(() => {
    console.log("Camp");
  }, 1500);

  */
};

// funcion para ver el dato ingresado por el usuario
const checkUserInput = () => {
  // en JS hay algunos valores que son comunmente falsos (los datos nulos, indefinidos, el numero 0 y strings vacias). Aca utilizamos el operador logico NOT para comprobar si el valor es falso

  // convertimos la entrada en un entero para usarlo durante el algoritmo
  const inputInt = parseInt(numberInput.value);

  // alertamos al usuario cuando lo que introduce no es un numero decimal
  if (!numberInput.value || isNaN(inputInt)) {
    alert("Please provide a decimal number");
    return;
  }

  // vamos a analizar el caso cuando el usuario ingrese el numero 5
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
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

/* pruebas sobre como funciona la recursividad


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
