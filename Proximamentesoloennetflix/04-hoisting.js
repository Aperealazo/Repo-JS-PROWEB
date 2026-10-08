// HOISTING Y CLASES

/*
IMPORTANTE:

Las clases deben declararse antes
de utilizarlas.

No podemos crear un objeto antes
de que JavaScript conozca la clase.

Por eso primero declaramos la clase
y después utilizamos new.
*/

class Producto {

  constructor(nombre) {
    this.nombre = nombre;
  }

}

let producto = new Producto(
  "Mouse Gamer"
);

console.log(producto);


// EJEMPLO INCORRECTO:
//
// Si colocáramos esto ANTES de la clase:
//
// let producto = new Producto("Mouse");
//
// JavaScript produciría un error porque
// la clase todavía no fue inicializada.
