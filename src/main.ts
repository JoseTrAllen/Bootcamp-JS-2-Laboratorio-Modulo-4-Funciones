let contador: number = 0;
const numeroTurno = document.getElementById("numero-turno")

//RESTAR UN TURNO 
function anteriorButton () {
  contador--;
  if (numeroTurno !== undefined && numeroTurno !== null && numeroTurno instanceof HTMLHeadingElement) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonAnterior = document.getElementById("anterior");

if (botonAnterior !== undefined && botonAnterior !== null && botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener("click", anteriorButton);
}

//RESETEAR TURNO A CERO
function resetbutton() {
  contador = 0;
  if (numeroTurno !== undefined && numeroTurno !== null && numeroTurno instanceof HTMLHeadingElement) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonReset = document.getElementById("reset");

if (botonReset !== undefined && botonReset !== null && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener("click", resetbutton);
}

//AÑADIR UN TURNO
function siguientebutton () {
  contador++;
  if (numeroTurno !== undefined && numeroTurno !== null && numeroTurno instanceof HTMLHeadingElement) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonSiguiente = document.getElementById("siguiente");

if (botonSiguiente !== undefined && botonSiguiente !== null && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener("click", siguientebutton);
}

//INTRODUCIR NUMERO EN INPUT
function turnoManual () {
  const inputTurnoManual = document.getElementById("turno-manual");
  if (inputTurnoManual !== undefined && inputTurnoManual !== null && inputTurnoManual instanceof HTMLInputElement) {
    const inputValue = inputTurnoManual.value;
    if (numeroTurno !== undefined && numeroTurno !== null && numeroTurno instanceof HTMLHeadingElement) {
      numeroTurno.innerHTML = inputValue.toString().padStart(2, "0");
      contador = parseInt(inputValue)
    }
  }
}

const botonEnviarTurno = document.getElementById("enviar-turno");
if (botonEnviarTurno !== undefined && botonEnviarTurno !== null && botonEnviarTurno instanceof HTMLButtonElement){
  botonEnviarTurno.addEventListener("click", turnoManual);
}
