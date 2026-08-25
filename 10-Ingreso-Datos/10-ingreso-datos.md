# Ingreso de datos con `prompt()`

## ¿Qué es `prompt()`?

`prompt()` es una función de JavaScript que permite **pedirle un dato al usuario**.

Cuando se ejecuta, aparece una ventana donde el usuario puede escribir información.

```js
let nombre = prompt("Ingresá tu nombre:");

console.log(nombre);
```

El dato ingresado queda guardado en la variable `nombre`.

---

## `prompt()` devuelve texto

Los datos ingresados con `prompt()` son de tipo **string (texto)**.

```js
let edad = prompt("Ingresá tu edad:");

console.log(typeof edad);
```

Aunque el usuario escriba `18`, JavaScript lo recibe como texto.

---

## Convertir texto a número

Si necesitamos trabajar con números, podemos utilizar `Number()`.

```js
let edad = Number(prompt("Ingresá tu edad:"));

console.log(edad);
```

Ahora `edad` es de tipo **number**.

---

## Ejemplo con una condición

Podemos combinar `prompt()` con lo que ya aprendimos:

```js
let edad = Number(prompt("Ingresá tu edad:"));

if (edad >= 18) {
    console.log("Sos mayor de edad");
} else {
    console.log("Sos menor de edad");
}
```

---

## Recordar

- `prompt()` → pide un dato al usuario.
- `Number()` → convierte un dato a número.
- `console.log()` → muestra información en la consola.

```js
let nombre = prompt("Nombre:");
let edad = Number(prompt("Edad:"));

console.log("Hola", nombre);
console.log("Tenés", edad, "años");
```

> **Antes:** nosotros escribíamos los datos en el código.  
> **Ahora:** el usuario puede ingresar sus propios datos.