// MODIFICAR PROPIEDADES

/*
Las propiedades de un objeto pueden cambiar.

En este ejemplo modificamos el precio
y el stock de un producto.
*/

let producto = {
  nombre: "Teclado Mecánico",
  precio: 70000,
  stock: 10
};

console.log("Antes:");
console.log(producto);

producto.precio = 65000;
producto.stock = 8;

console.log("Después:");
console.log(producto);
