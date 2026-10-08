// GET Y SET EN CLASES

/*
GET permite obtener información.

SET permite modificar información
aplicando una condición antes de guardar.

En este ejemplo no permitimos
precios menores o iguales a cero.
*/

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  get mostrarPrecio() {
    return "$" + this.precio;
  }

  set cambiarPrecio(nuevoPrecio) {

    if (nuevoPrecio > 0) {

      this.precio = nuevoPrecio;

    } else {

      console.log("Precio no válido");

    }

  }

}

let producto = new Producto(
  "Notebook",
  850000
);

console.log(
  "Precio original:",
  producto.mostrarPrecio
);

producto.cambiarPrecio = 800000;

console.log(
  "Nuevo precio:",
  producto.mostrarPrecio
);
