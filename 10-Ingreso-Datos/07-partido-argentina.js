// RESULTADO DE UN PARTIDO

let rival = prompt("Ingresá el rival de Argentina:");

let golesArgentina = Number(prompt("Goles de Argentina:"));
let golesRival = Number(prompt("Goles del rival:"));

console.log("Argentina", golesArgentina, "-", golesRival, rival);

if (golesArgentina > golesRival) {
    console.log("Argentina ganó 🇦🇷");
} else if (golesArgentina < golesRival) {
    console.log("Argentina perdió");
} else {
    console.log("El partido terminó empatado");
}
