// RECORRER UN ARREGLO DE OBJETOS

/*
Tenemos un arreglo que contiene productos.

Utilizamos un ciclo for para recorrerlo
y mostrar los datos de cada objeto.

Aquí combinamos:
ARREGLOS + OBJETOS + CICLOS.
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

for (let i = 0; i < productos.length; i++) {

  console.log("Producto:", productos[i].nombre);
  console.log("Precio: $" + productos[i].precio);
  console.log("--------------------");

}
