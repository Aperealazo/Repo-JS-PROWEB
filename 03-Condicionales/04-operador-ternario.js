// OPERADOR TERNARIO

let edad = 20;

// Forma tradicional
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}

// La misma condición utilizando operador ternario

let resultado = edad >= 18
  ? "Mayor de edad"
  : "Menor de edad";

console.log(resultado);
