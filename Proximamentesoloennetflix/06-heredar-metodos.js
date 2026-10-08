// HEREDAR MÉTODOS

/*
Las clases hijas también pueden utilizar
los métodos de la clase padre.

Producto tiene mostrarInformacion().

Videojuego hereda de Producto.

Por eso un Videojuego también puede
utilizar mostrarInformacion().
*/

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInformacion() {

    console.log("Producto:", this.nombre);
    console.log("Precio: $" + this.precio);

  }

}


class Videojuego extends Producto {

  constructor(nombre, precio, plataforma) {

    super(nombre, precio);

    this.plataforma = plataforma;

  }

}


let juego = new Videojuego(
  "Minecraft",
  30000,
  "PC"
);


// Este método viene de Producto
juego.mostrarInformacion();

console.log(
  "Plataforma:",
  juego.plataforma
);
