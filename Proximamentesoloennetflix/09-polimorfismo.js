// POLIMORFISMO

/*
POLIMORFISMO significa que podemos utilizar
el mismo método con objetos diferentes
y obtener comportamientos diferentes.

Producto tiene mostrarInformacion().

Videojuego y Notebook heredan de Producto
pero cada clase modifica el método.
*/

class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  mostrarInformacion() {

    console.log(
      this.nombre +
      " - $" +
      this.precio
    );

  }

}


class Videojuego extends Producto {

  constructor(nombre, precio, plataforma) {

    super(nombre, precio);

    this.plataforma = plataforma;

  }

  mostrarInformacion() {

    console.log(
      this.nombre +
      " - " +
      this.plataforma +
      " - $" +
      this.precio
    );

  }

}


class Notebook extends Producto {

  constructor(nombre, precio, ram) {

    super(nombre, precio);

    this.ram = ram;

  }

  mostrarInformacion() {

    console.log(
      this.nombre +
      " - " +
      this.ram +
      "GB RAM - $" +
      this.precio
    );

  }

}


let producto1 = new Producto(
  "Mouse",
  45000
);

let producto2 = new Videojuego(
  "Minecraft",
  30000,
  "PC"
);

let producto3 = new Notebook(
  "Lenovo IdeaPad",
  850000,
  16
);


// Mismo método
// Diferentes comportamientos

producto1.mostrarInformacion();

producto2.mostrarInformacion();

producto3.mostrarInformacion();
