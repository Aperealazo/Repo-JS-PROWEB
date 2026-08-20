// FUNCIÓN RECURSIVA
// CUENTA REGRESIVA PARA LA FINAL

function cuentaRegresiva(numero) {

  if (numero === 0) {

    console.log("¡COMIENZA LA FINAL!");

    return;
  }

  console.log(numero);

  cuentaRegresiva(numero - 1);
}

cuentaRegresiva(5);
