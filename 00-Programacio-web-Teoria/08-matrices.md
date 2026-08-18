# Matrices en JavaScript

Una matriz es un **arreglo que contiene otros arreglos**.

Permite organizar información en filas y columnas.

```javascript
let grupos = [
  ["Argentina", "Francia", "Japón"],
  ["Brasil", "España", "México"]
];
```

---

## Filas y Columnas

Para acceder a un elemento usamos dos índices:

```javascript
matriz[fila][columna]
```

Ejemplo:

```text
              Col 0       Col 1       Col 2

Fila 0      Argentina     Francia      Japón
Fila 1      Brasil        España       México
```

```javascript
console.log(grupos[0][0]); // Argentina
console.log(grupos[1][2]); // México
```

---

## Recorrer una Matriz

Para recorrer filas y columnas podemos usar dos ciclos.

```javascript
for (let fila = 0; fila < grupos.length; fila++) {

  for (let col = 0; col < grupos[fila].length; col++) {
    console.log(grupos[fila][col]);
  }

}
```

---

## Resumen

- Una matriz contiene varios arreglos.
- Se organiza en filas y columnas.
- Usamos `matriz[fila][columna]`.
- Podemos recorrerla utilizando dos ciclos.