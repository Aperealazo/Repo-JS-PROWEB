# Arreglos en JavaScript

Un arreglo permite **guardar varios valores en una sola variable**.

```javascript
let frutas = ["Manzana", "Banana", "Naranja"];
```

---

## Índices y posiciones

Cada elemento tiene una posición llamada **índice**.

⚠️ Los índices comienzan desde `0`, no desde `1`.

```text
Índice:      0          1          2          3
          ┌────────┬────────┬─────────┬─────────┐
Arreglo:  │ Manzana│ Banana │ Naranja │  Pera   │
          └────────┴────────┴─────────┴─────────┘
```

Por ejemplo:

```javascript
let frutas = ["Manzana", "Banana", "Naranja", "Pera"];

console.log(frutas[0]); // Manzana
console.log(frutas[1]); // Banana
console.log(frutas[3]); // Pera
```

### Ejemplo

Si tenemos:

```javascript
let alumnos = ["Ana", "Juan", "Pedro", "Lucía"];
```

Podemos identificar:

```text
alumnos[0] → Ana
alumnos[1] → Juan
alumnos[2] → Pedro
alumnos[3] → Lucía
```

Por lo tanto:

```javascript
console.log(alumnos[2]);
```

muestra:

```text
Pedro
```

---

## Modificar un elemento

Podemos cambiar un valor indicando su índice.

```javascript
frutas[1] = "Frutilla";
```

---

## Cantidad de elementos

`length` permite conocer la cantidad de elementos.

```javascript
console.log(frutas.length);
```

⚠️ **Índice y cantidad no son lo mismo.**

```text
["Ana", "Juan", "Pedro", "Lucía"]

Cantidad:       4
Último índice:  3
```

---

## Recorrer un arreglo

Podemos utilizar un ciclo `for`.

```javascript
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

La variable `i` representa el índice:

```text
i = 0 → frutas[0]
i = 1 → frutas[1]
i = 2 → frutas[2]
i = 3 → frutas[3]
```

---

## Resumen

- Un arreglo almacena varios valores.
- Los índices comienzan en `0`.
- `length` indica la cantidad de elementos.
- Accedemos con `arreglo[indice]`.
- Los ciclos permiten recorrer un arreglo.