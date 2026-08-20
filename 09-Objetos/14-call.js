// MÉTODO CALL

/*
call permite ejecutar una función
utilizando un objeto como referencia.

El objeto enviado a call pasa a ser
el valor de this dentro de la función.
*/

let producto1 = {
  nombre: "Mouse"
};

let producto2 = {
  nombre: "Teclado"
};

function mostrarProducto() {
  console.log("Producto:", this.nombre);
}

mostrarProducto.call(producto1);
mostrarProducto.call(producto2);
