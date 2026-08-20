// PROTOTYPE

/*
prototype permite agregar métodos
que pueden compartir todos los objetos
creados con un constructor.

El método no necesita escribirse
dentro de cada objeto.
*/

function Producto(nombre, precio) {

  this.nombre = nombre;
  this.precio = precio;

}

Producto.prototype.mostrarInformacion = function () {

  console.log(
    this.nombre + " - $" + this.precio
  );

};

let producto1 = new Producto(
  "Mouse",
  45000
);

let producto2 = new Producto(
  "Teclado",
  70000
);

producto1.mostrarInformacion();
producto2.mostrarInformacion();
