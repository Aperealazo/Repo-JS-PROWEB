# Condicionales en JavaScript

Los condicionales permiten tomar decisiones según si una condición se cumple o no.

---

## if

Ejecuta un bloque de código si la condición es verdadera.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Es mayor de edad");
}
```

---

## if - else

Permite elegir entre dos caminos.

```javascript
let edad = 16;

if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}
```

---

## if - else if - else

Permite evaluar varias condiciones.

```javascript
let nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}
```

---

## Operador Ternario

Es una forma corta de escribir un `if - else`.

```javascript
condicion ? valorSiEsVerdadero : valorSiEsFalso;
```

Ejemplo:

```javascript
let edad = 20;

let resultado = edad >= 18
  ? "Mayor de edad"
  : "Menor de edad";

console.log(resultado);
```

Se recomienda usarlo solamente en condiciones simples.

---

## switch

Permite comparar un valor con diferentes casos.

```javascript
let dia = 2;

switch (dia) {
  case 1:
    console.log("Lunes");
    break;

  case 2:
    console.log("Martes");
    break;

  default:
    console.log("Día incorrecto");
}
```

---

## Resumen

- `if` evalúa una condición.
- `else` se ejecuta cuando la condición no se cumple.
- `else if` permite agregar más condiciones.
- El ternario es una forma corta de escribir un `if - else`.
- `switch` sirve para comparar un valor con varios casos.