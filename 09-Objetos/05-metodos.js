// MÉTODOS EN OBJETOS

/*
Un objeto también puede contener funciones.

Cuando una función pertenece a un objeto
la llamamos MÉTODO.

this hace referencia al objeto actual.
*/

let producto = {
  nombre: "Auriculares",
  precio: 90000,

  mostrarInformacion: function () {
    console.log("Producto:", this.nombre);
    console.log("Precio: $" + this.precio);
  }
};

// Ejecutamos el método
producto.mostrarInformacion();
