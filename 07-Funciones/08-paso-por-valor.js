// PASO POR VALOR

let goles = 3;

function modificarGoles(numero) {

  numero = 10;

  console.log("Dentro:", numero);

}

modificarGoles(goles);

console.log("Fuera:", goles);
