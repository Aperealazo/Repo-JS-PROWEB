    # Funciones en JavaScript

Una función es un bloque de código que podemos **reutilizar**.

```javascript
function saludar() {
  console.log("Hola");
}

saludar();
```

---

## Parámetros y Argumentos

Los parámetros permiten enviar información a una función.

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Juan");
```

```text
nombre  → Parámetro
"Juan"  → Argumento
```

---

## return

`return` permite devolver un resultado.

```javascript
function sumar(a, b) {
  return a + b;
}

let resultado = sumar(5, 3);
```

---

## Procedimiento y Función

Un procedimiento realiza una acción.

```javascript
function saludar() {
  console.log("Hola");
}
```

Una función puede devolver un resultado utilizando `return`.

```javascript
function sumar(a, b) {
  return a + b;
}
```

---

## Alcance de Variables

Una variable creada dentro de una función solamente existe dentro de ella.

```javascript
function ejemplo() {

  let mensaje = "Hola";

  console.log(mensaje);
}
```

---

## Función Recursiva

Una función recursiva es una función que **se llama a sí misma**.

```javascript
function contar(numero) {

  if (numero === 0) {
    return;
  }

  console.log(numero);

  contar(numero - 1);
}
```

---

## Resumen

- Las funciones permiten reutilizar código.
- Los parámetros reciben información.
- Los argumentos son los valores enviados.
- `return` devuelve un resultado.
- Las variables pueden tener diferente alcance.
- Una función recursiva puede llamarse a sí misma.