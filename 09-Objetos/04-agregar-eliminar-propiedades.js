// AGREGAR Y ELIMINAR PROPIEDADES

/*
Podemos agregar propiedades nuevas
después de crear un objeto.

También podemos eliminarlas utilizando delete.
*/

let producto = {
  nombre: "Monitor",
  precio: 250000
};

console.log("Objeto original:");
console.log(producto);

// Agregar una propiedad
producto.marca = "Samsung";

console.log("Con nueva propiedad:");
console.log(producto);

// Eliminar una propiedad
delete producto.precio;

console.log("Después de eliminar precio:");
console.log(producto);
