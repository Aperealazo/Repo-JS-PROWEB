// MÉTODOS EN UNA CLASE

/*
Las clases también pueden tener métodos.

Un método es una función que pertenece
a los objetos creados con la clase.

En este ejemplo cada producto puede
mostrar su propia información.
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

let producto1 = new Producto(
  "Mouse Gamer",
  45000
);

let producto2 = new Producto(
  "Monitor",
  250000
);

producto1.mostrarInformacion();

console.log("----------------");

producto2.mostrarInformacion();
