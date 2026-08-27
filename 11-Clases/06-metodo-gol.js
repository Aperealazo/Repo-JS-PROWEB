// CLASE CON VARIOS MÉTODOS

class Jugador {

    constructor(nombre, numero) {
        this.nombre = nombre;
        this.numero = numero;
        this.goles = 0;
    }

    hacerGol() {
        this.goles++;
        console.log(this.nombre + " hizo un gol");
    }
    mostrarGoles() {
        console.log(
            this.nombre + " tiene " + this.goles + " goles"
        );
    }

}

let jugador1 = new Jugador("Messi", 10);

jugador1.hacerGol();
jugador1.hacerGol();
jugador1.hacerGol();

jugador1.mostrarGoles();
