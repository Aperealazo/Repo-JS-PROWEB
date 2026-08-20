// MÉTODO GET

/*
get permite obtener información
de un objeto.

En este ejemplo devuelve el nombre
y la marca del producto juntos.
*/

let producto = {
  nombre: "Notebook",
  marca: "Lenovo",

  get descripcion() {
    return this.marca + " " + this.nombre;
  }
};

console.log(producto.descripcion);
