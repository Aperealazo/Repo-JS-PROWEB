// MÉTODO QUE MODIFICA UNA PROPIEDAD

/*
Este objeto representa un producto.

El método vender() disminuye el stock
cada vez que se realiza una venta.

Así vemos que un método también puede
modificar propiedades del objeto.
*/

let producto = {
  nombre: "Mouse Gamer",
  precio: 45000,
  stock: 3,

  vender: function () {

    if (this.stock > 0) {
      this.stock--;
      console.log("Producto vendido");
    } else {
      console.log("No hay stock");
    }

  }
};

console.log("Stock inicial:", producto.stock);

producto.vender();

console.log("Stock actual:", producto.stock);
