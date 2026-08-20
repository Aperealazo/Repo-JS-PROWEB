// MÉTODO SET

/*
set permite modificar una propiedad
controlando el valor que queremos guardar.

En este ejemplo solamente aceptamos
precios mayores a cero.
*/

let producto = {
  nombre: "Notebook",
  precio: 850000,

  set nuevoPrecio(valor) {

    if (valor > 0) {
      this.precio = valor;
    } else {
      console.log("El precio no es válido");
    }

  }
};

console.log("Precio original:", producto.precio);

producto.nuevoPrecio = 800000;

console.log("Nuevo precio:", producto.precio);
