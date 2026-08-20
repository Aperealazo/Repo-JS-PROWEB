// EJERCICIO INTEGRADOR
// CAMINO FICTICIO ARGENTINA 2026

let partidos = [
  ["Japón", 3, 0],
  ["México", 2, 0],
  ["Portugal", 2, 1],
  ["Alemania", 1, 0],
  ["Brasil", 3, 2],
  ["España", 2, 1]
];

function mostrarResultado(partido) {

  let rival = partido[0];
  let golesArgentina = partido[1];
  let golesRival = partido[2];

  console.log(
    "Argentina " +
    golesArgentina +
    " - " +
    golesRival +
    " " +
    rival
  );

}

for (let i = 0; i < partidos.length; i++) {

  mostrarResultado(partidos[i]);

}
