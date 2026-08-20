// OBJETOS DENTRO DE UN ARREGLO

/*
Podemos guardar varios objetos
dentro de un arreglo.

Cada posición del arreglo contiene
un producto diferente.
*/

let productos = [
  {
    nombre: "Mouse",
    precio: 45000
  },
  {
    nombre: "Teclado",
    precio: 70000
  },
  {
    nombre: "Monitor",
    precio: 250000
  }
];

console.log(productos);

// Primer producto
console.log(productos[0]);

// Nombre del primer producto
console.log(productos[0].nombre);

// Precio del segundo producto
console.log(productos[1].precio);
