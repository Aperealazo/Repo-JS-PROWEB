// CLASES EN JAVASCRIPT

/*
Una clase funciona como un molde
para crear objetos.

En este ejemplo creamos una clase Producto.

constructor() recibe los datos necesarios
para crear cada producto.

this hace referencia al objeto que
se está creando.
*/

class Producto {

  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

}

// Creamos objetos a partir de la clase
let producto1 = new Producto(
  "Mouse Gamer",
  45000,
  10
);

let producto2 = new Producto(
  "Teclado Mecánico",
  70000,
  5
);

console.log(producto1);
console.log(producto2);
