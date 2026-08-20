// ACCEDER A LAS PROPIEDADES DE UN OBJETO

/*
Podemos acceder a una propiedad utilizando:

objeto.propiedad

También podemos utilizar:

objeto["propiedad"]
*/

let producto = {
  nombre: "Mouse Gamer",
  marca: "Logitech",
  precio: 45000
};

console.log("Producto:", producto.nombre);
console.log("Marca:", producto.marca);
console.log("Precio:", producto.precio);

// Otra forma de acceder
console.log(producto["nombre"]);
