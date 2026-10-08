// SOBREESCRITURA DE MÉTODOS

/*
Una clase hija puede cambiar
el comportamiento de un método heredado.

Esto se llama SOBREESCRITURA.

Producto tiene mostrarInformacion().

Videojuego crea su propia versión
del mismo método.
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

  // Sobreescribimos el método
  mostrarInformacion() {

    console.log("Videojuego:", this.nombre);
    console.log("Precio: $" + this.precio);
    console.log("Plataforma:", this.plataforma);

  }

}


let producto = new Producto(
  "Mouse Gamer",
  45000
);

let juego = new Videojuego(
  "Minecraft",
  30000,
  "PC"
);


console.log("PRODUCTO:");

producto.mostrarInformacion();


console.log("----------------");


console.log("VIDEOJUEGO:");

juego.mostrarInformacion();
