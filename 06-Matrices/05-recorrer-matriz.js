// RECORRER UNA MATRIZ

let partidos = [
  ["Japón", 3, 0],
  ["Portugal", 2, 1],
  ["Brasil", 3, 2],
  ["España", 2, 1]
];

for (let fila = 0; fila < partidos.length; fila++) {
  for (let col = 0; col < partidos[fila].length; col++){
    console.log(partidos[fila][col]);
  }
}

