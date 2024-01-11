let contador: any = 0;
const numeroTurno = document.getElementById("numero-turno");
console.log(typeof numeroTurno);


//RESTAR UN TURNO 
function anteriorButton () {
  contador--;
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonAnterior = document.getElementById("anterior");

if (botonAnterior !== undefined && botonAnterior !== null) {
  botonAnterior.addEventListener("click", anteriorButton);
}

//RESETEAR TURNO A CERO
function resetbutton() {
  contador = 0;
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonReset = document.getElementById("reset");

if (botonReset !== undefined && botonReset !== null) {
  botonReset.addEventListener("click", resetbutton);
}

//AÑADIR UN TURNO
function siguientebutton () {
  contador++;
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = contador.toString().padStart(2, "0");
  }
}

const botonSiguiente = document.getElementById("siguiente");

if (botonSiguiente !== undefined && botonSiguiente !== null) {
  botonSiguiente.addEventListener("click", siguientebutton);
}

//INTRODUCIR NUMERO EN INPUT
function turnoManual () {
  const inputTurnoManual = (document.getElementById("turno-manual") as HTMLInputElement).value;
  if (numeroTurno !== undefined && numeroTurno !== null) {
    numeroTurno.innerHTML = inputTurnoManual.toString().padStart(2, "0");
  }
  if (inputTurnoManual) { // Este if hace que al introducir un número manualmente y darle a siguiente o anterior, parta desde el número introducido. De lo contrario el contador partiría de cero.
    contador = inputTurnoManual;
  }
}

const botonEnviarTurno = document.getElementById("enviar-turno");
if (botonEnviarTurno !== undefined && botonEnviarTurno !== null){
  botonEnviarTurno.addEventListener("click", turnoManual);
}






