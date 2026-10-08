# Git — Subir archivos o carpetas específicas

Cuando tenemos varios archivos modificados, **no siempre queremos subir todo al repositorio**.

En lugar de utilizar:

```bash
git add .
```

podemos seleccionar exactamente qué archivos o carpetas queremos subir.

---

## 1. Ver los cambios

Primero:

```bash
git status
```

Esto permite ver qué archivos fueron:

- Modificados
- Creados
- Eliminados

---

## 2. Subir una carpeta específica

Si queremos subir solamente una carpeta:

```bash
git add 03-Condicionales/
```

Luego verificamos:

```bash
git status
```

Y hacemos el commit:

```bash
git commit -m "Agrego condicionales"
```

Finalmente:

```bash
git push origin main
```

---

## 3. Subir un archivo específico

Por ejemplo:

```bash
git add 02-Operadores/05-logicos.js
```

Luego:

```bash
git status
git commit -m "Agrego operadores logicos"
git push origin main
```

---

## 4. Subir varios archivos específicos

Podemos agregar varios archivos antes de hacer el commit:

```bash
git add 00-Programacio-web-Teoria/08-matrices.md
git add 00-Programacio-web-Teoria/09-funciones.md
git add 02-Operadores/05-logicos.js
```

Después:

```bash
git status
git commit -m "Actualizo contenidos"
git push origin main
```

---

## 5. Si agregamos algo por error

Si todavía **NO hicimos el commit**, podemos sacar los archivos del área de preparación:

```bash
git restore --staged .
```

Esto **no elimina los archivos ni los cambios realizados**.

Después agregamos solamente lo que queremos:

```bash
git add 03-Condicionales/
```

---

# Resumen

```bash
git status
git add nombre-carpeta/
git status
git commit -m "Descripción del cambio"
git push origin main
```

> **Importante:** Si queremos seleccionar qué subir, evitar `git add .`, ya que agrega todos los cambios del proyecto.