// HERENCIA EN JAVASCRIPT

/*
La herencia permite crear una clase
a partir de otra.

Producto será la clase PADRE.

Videojuego será la clase HIJA.

La clase hija heredará las propiedades
de la clase padre.

extends indica de qué clase heredamos.

super() llama al constructor de la
clase padre.
*/

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
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

console.log(juego);

console.log("Nombre:", juego.nombre);
console.log("Precio:", juego.precio);
console.log("Plataforma:", juego.plataforma);
