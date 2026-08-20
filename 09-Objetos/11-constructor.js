// FUNCIÓN CONSTRUCTORA

/*
Una función constructora funciona
como un molde para crear objetos.

Esto evita tener que escribir
manualmente cada objeto.

new crea un nuevo objeto utilizando
el constructor.
*/

function Producto(nombre, marca, precio) {

  this.nombre = nombre;
  this.marca = marca;
  this.precio = precio;

}

let producto1 = new Producto(
  "Mouse",
  "Logitech",
  45000
);

let producto2 = new Producto(
  "Monitor",
  "Samsung",
  250000
);

console.log(producto1);
console.log(producto2);
