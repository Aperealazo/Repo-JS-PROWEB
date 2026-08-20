// MÉTODO APPLY

/*
apply funciona de manera similar a call.

La diferencia es que los argumentos
se envían dentro de un arreglo.
*/

let producto = {
  nombre: "Notebook"
};

function mostrarVenta(cantidad, precio) {

  console.log("Producto:", this.nombre);
  console.log("Cantidad:", cantidad);
  console.log("Precio: $" + precio);

}

mostrarVenta.apply(
  producto,
  [2, 850000]
);
