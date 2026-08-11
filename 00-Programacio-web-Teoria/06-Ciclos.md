# Ciclos en JavaScript

Los ciclos permiten **repetir instrucciones** varias veces.

---

## Ciclo for

Se utiliza cuando sabemos cuántas veces queremos repetir una acción.

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

El `for` tiene tres partes:

```javascript
for (inicio; condicion; incremento)
```

---

## Ciclo while

Repite instrucciones **mientras una condición sea verdadera**.

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

---

## Ciclo do...while

Es similar a `while`, pero ejecuta el código **al menos una vez**.

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

---

## break y continue

`break` termina el ciclo.

`continue` salta una repetición y continúa con la siguiente.

```javascript
if (i === 5) {
  break;
}
```

---

## Resumen

- `for` → repetir una cantidad conocida de veces.
- `while` → repetir mientras se cumpla una condición.
- `do...while` → ejecuta al menos una vez.
- `break` → termina el ciclo.
- `continue` → salta una repetición.