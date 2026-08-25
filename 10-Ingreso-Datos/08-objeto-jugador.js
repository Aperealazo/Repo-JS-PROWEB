// CREAR UN OBJETO CON DATOS INGRESADOS

let nombre = prompt("Nombre del jugador:");
let numero = Number(prompt("Número de camiseta:"));
let posicion = prompt("Posición:");

let jugador = {
    nombre: nombre,
    numero: numero,
    posicion: posicion
};

console.log("Jugador creado:");
console.log(jugador);
