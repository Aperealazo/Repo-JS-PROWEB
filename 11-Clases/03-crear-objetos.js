// CREAR OBJETOS A PARTIR DE UNA CLASE

class Jugador {

    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }

}

let jugador1 = new Jugador("Messi", 10);
let jugador2 = new Jugador("De Paul", 7);
let jugador3 = new Jugador("Dibu Martinez", 23);

console.log(jugador1);
console.log(jugador2);
console.log(jugador3);
