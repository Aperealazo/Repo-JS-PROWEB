// MÉTODOS EN UN CONSTRUCTOR

/*
También podemos agregar métodos
a los objetos creados por un constructor.

En este ejemplo todos los productos
podrán mostrar su información.
*/

function Producto(nombre, precio) {

  this.nombre = nombre;
  this.precio = precio;

  this.mostrarInformacion = function () {

    console.log(
      this.nombre + " - $" + this.precio
    );

  };

}

let producto1 = new Producto(
  "Mouse",
  45000
);

let producto2 = new Producto(
  "Monitor",
  250000
);

producto1.mostrarInformacion();
producto2.mostrarInformacion();
