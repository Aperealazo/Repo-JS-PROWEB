// PALABRA THIS
// this hace referencia al objeto que estamos creando.
class Jugador {

    constructor(nombre, numero, posicion) {
        this.nombre = nombre;
        this.numero = numero;
        this.posicion = posicion;
    }

}

let jugador1 = new Jugador(
    "Lionel Messi",
    10,
    "Delantero"
);

console.log("Nombre:", jugador1.nombre);
console.log("Número:", jugador1.numero);
console.log("Posición:", jugador1.posicion);
