// MÉTODO toString()

/*
Todos los objetos de JavaScript
heredan características de Object.

Uno de sus métodos es toString().

Podemos sobreescribir toString()
para decidir cómo queremos representar
nuestro objeto como texto.
*/

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  toString() {

    return (
      this.nombre +
      " - $" +
      this.precio
    );

  }

}


let producto = new Producto(
  "Mouse Gamer",
  45000
);

console.log(producto.toString());
