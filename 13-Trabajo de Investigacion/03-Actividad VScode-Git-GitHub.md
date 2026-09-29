# Actividad 2: VS Code, Git y GitHub

**Institución:** Centro Educativo Nonogasta (CEN)  
**Materia:** Programación II  
**Docente:** Tec. Perea Lazo Alex N.  
**Modalidad:** individual o grupos de hasta **4 integrantes**  
**Producto:** repositorio de GitHub + video tutorial

## Video de referencia

Antes de comenzar, pueden observar el siguiente video para tener una **referencia de cómo organizar y realizar un tutorial de este tipo**:

https://youtu.be/ts1J8SUEVHw

**Importante:** el video es únicamente un ejemplo y una guía. **No deben imitarlo, copiarlo ni realizar exactamente el mismo proyecto.** Cada grupo deberá realizar su propio trabajo, explicando el procedimiento con sus palabras y utilizando el proyecto solicitado en esta actividad.

---

## Objetivo

Aprender a trabajar con un proyecto desde **Visual Studio Code**, utilizar **Git** desde la terminal y conectarlo con un repositorio de **GitHub**.

En esta actividad **no deberán desarrollar una página web completa**. Solo crearán una estructura básica para practicar el proceso.

---

## Proyecto de práctica

Creen una carpeta llamada:

```text
mi-proyecto-web/
```

Dentro deberán crear la siguiente estructura:

```text
mi-proyecto-web/
│
├── index.html
│
├── css/
│   └── estilos.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── img/
│       └── imagen.jpg
│
└── README.md
```

En la carpeta `assets/img/` deberán agregar **una imagen de su elección**. Puede ser una foto, logo, personaje, paisaje, equipo de fútbol, videojuego, mascota, etc.

### Contenido mínimo

En `index.html`:

```html
<h1>Mi primer proyecto con GitHub</h1>
```

En `css/estilos.css`:

```css
body { background-color: lightgray; }
```

En `js/script.js`:

```javascript
console.log("Proyecto conectado con GitHub");
```

En `README.md`:

```md
# Mi Proyecto Web
```

**No agreguen más código por ahora.** La página web se desarrollará más adelante.

Por ahora solamente deberán:

1. Crear correctamente las carpetas y archivos.
2. Agregar una imagen dentro de `assets/img/`.
3. Abrir todo el proyecto desde VS Code.
4. Utilizar Git desde la terminal.
5. Crear el repositorio en GitHub.
6. Conectar el proyecto local con GitHub.
7. Subir todos los archivos y comprobar que aparezcan correctamente en el repositorio.

El objetivo principal de esta actividad es aprender el flujo:

```text
PROYECTO EN VS CODE
        ↓
       Git
        ↓
     Commit
        ↓
      Push
        ↓
     GitHub
```

---

## Video tutorial

Graben su pantalla y voz mostrando cómo realizan el proceso.

El video deberá mostrar:

1. Crear la carpeta y los archivos del proyecto.
2. Abrir el proyecto en **Visual Studio Code**.
3. Abrir la terminal integrada.
4. Comprobar que Git funciona:

```bash
git --version
```

5. Inicializar Git y revisar el estado:

```bash
git init
git status
```

6. Preparar los archivos:

```bash
git add .
```

7. Realizar el primer commit:

```bash
git commit -m "Inicio del proyecto"
```

8. Crear un repositorio en **GitHub**.
9. Conectar el proyecto de VS Code con el repositorio:

```bash
git remote add origin URL-DEL-REPOSITORIO
```

10. Subir el proyecto:

```bash
git push -u origin main
```

11. Abrir GitHub y comprobar que aparezcan todos los archivos y carpetas.

Durante el video deberán explicar brevemente **qué hace cada comando**. No alcanza solamente con copiar y ejecutar los comandos.

---

## Segundo cambio

Una vez que el proyecto esté publicado, modifiquen **una sola línea** de cualquiera de los archivos.

Luego ejecuten:

```bash
git status
git add .
git commit -m "Actualización del proyecto"
git push
```

Finalmente, ingresen nuevamente a GitHub y comprueben que el cambio se haya actualizado correctamente.

---

## Entrega

Deberán entregar:

- Video tutorial.
- Enlace al repositorio de GitHub.

El repositorio deberá contener **al menos dos commits**.

---

## Criterios de evaluación

| Criterio | Puntos |
|---|---:|
| Crea y organiza correctamente la estructura del proyecto | 2 |
| Abre y trabaja correctamente desde VS Code | 1 |
| Utiliza y explica los comandos básicos de Git | 3 |
| Conecta correctamente VS Code/Git con GitHub | 2 |
| Realiza dos commits y comprueba los cambios en GitHub | 1 |
| Video claro y participación del grupo | 1 |
| **Total** | **10** |

> **Importante:** el objetivo de esta actividad no es desarrollar la página web. El objetivo es aprender el flujo de trabajo entre **VS Code, Git y GitHub**. El proyecto web se continuará desarrollando en las próximas clases.

