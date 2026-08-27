// MÉTODOS EN UNA CLASE
// Los métodos son funciones que pertenecen a una clase.
class Jugador {

    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
    }

    presentarse() {
        console.log(
            "Soy " + this.nombre +
            " y uso la camiseta " + this.numero
        );
    }

}

let jugador1 = new Jugador("Messi", 10);
let jugador2 = new Jugador("De Paul", 7);

jugador1.presentarse();
jugador2.presentarse();
