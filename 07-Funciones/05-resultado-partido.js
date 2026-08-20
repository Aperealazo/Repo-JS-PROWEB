// FUNCIÓN + CONDICIONALES

function resultadoArgentina(golesArgentina, golesRival) {

  if (golesArgentina > golesRival) {

    return "Argentina ganó";

  } else if (golesArgentina < golesRival) {

    return "Argentina perdió";

  } else {

    return "Empate";

  }

}

console.log(resultadoArgentina(3, 1));
console.log(resultadoArgentina(2, 2));
console.log(resultadoArgentina(0, 1));
