// INGRESO DE DATOS + CONDICIONAL

let nombre = prompt("Ingresá tu nombre:");
let edad = Number(prompt("Ingresá tu edad:"));

if (edad >= 18) {
    console.log(nombre, "es mayor de edad");
} else {
    console.log(nombre, "es menor de edad");
}
