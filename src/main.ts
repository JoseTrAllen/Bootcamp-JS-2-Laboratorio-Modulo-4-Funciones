let contador: any = 0;

const numeroTurno = (document.getElementById("numero-turno") as HTMLElement);
const botonAnterior = (document.getElementById("anterior") as HTMLButtonElement);
const botonReset = (document.getElementById("reset") as HTMLButtonElement);
const botonSiguiente = (document.getElementById("siguiente") as HTMLButtonElement);


botonAnterior.addEventListener("click", () => {
  contador--;
  numeroTurno.innerHTML = contador.toString();
})

botonReset.addEventListener("click", () => {
  contador = 0;
  numeroTurno.innerHTML = contador.toString().padStart(2, "0");
})

botonSiguiente.addEventListener("click", () => {
  contador++;
  numeroTurno.innerHTML = contador.toString().padStart(2, "0");
})

function turnoManual () {
  const inputTurnoManual = (document.getElementById("turno-manual") as HTMLInputElement).value;
  numeroTurno.innerHTML = inputTurnoManual.toString().padStart(2, "0");
  if (inputTurnoManual) { // Este if hace que al introducir un número manualmente al darle siguiente o anterior parta desde el número introducido.
    contador = inputTurnoManual;
  }
}

const botonEnviarTurno = (document.getElementById("enviar-turno") as HTMLButtonElement);
botonEnviarTurno.addEventListener("click", turnoManual);
