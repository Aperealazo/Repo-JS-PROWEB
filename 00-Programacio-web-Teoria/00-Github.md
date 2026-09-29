# Git y GitHub

Estos son los comandos que utilizaremos durante todas las clases
 para guardar nuestros proyectos en GitHub.

---

## 1. Ver el estado del proyecto

```bash
git status
```

Muestra los archivos que fueron modificados.

---

## 2. Agregar los cambios

```bash
git add .
```

Agrega todos los archivos modificados.

> El punto (`.`) significa **todos los archivos**.

---

## 3. Crear un commit

```bash
git commit -m "Descripción de los cambios"
```

Guarda una nueva versión del proyecto.

> `-m` permite escribir un mensaje que describa los cambios realizados.

---

## 4. Subir el proyecto a GitHub

```bash
git push origin main
```

Sube el proyecto a GitHub.

- `origin` → Repositorio remoto.
- `main` -> Rama principal. 

---

# Flujo de trabajo

```bash
git status
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

> 💡 **Recordá:** cada vez que termines una actividad, realizá un **commit** y subí tu proyecto a GitHub.
**Problemas??** Si no pudiste subir intenta esto:

git config --global user.name "TúUserdeGithub"
git config --global user.email "CorreodeGithub"