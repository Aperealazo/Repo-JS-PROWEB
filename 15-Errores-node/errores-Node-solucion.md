# Guía de instalación y solución de errores — Node.js y npm

**Materia:** Programación Web  
**Proyecto:** Sistema de Login CEN  
**Entorno:** Visual Studio Code — Windows (PowerShell)

## 1. Verificar la instalación

Antes de comenzar, abrir la terminal integrada de VS Code desde **Terminal → Nueva terminal**.

| Comando | Función | Resultado esperado |
|---|---|---|
| `node -v` | Verifica si Node.js está instalado. | Muestra la versión de Node.js. |
| `npm -v` | Verifica si npm funciona. | Muestra la versión de npm. |
| `npm.cmd -v` | Verifica npm cuando PowerShell bloquea scripts. | Muestra la versión de npm. |

## 2. Errores frecuentes y soluciones

| Error o problema | Posible causa | Solución |
|---|---|---|
| `node no se reconoce como un comando` | Node.js no está instalado o Windows no encuentra su ruta. | Instalar Node.js y reiniciar VS Code. |
| `npm.ps1 no se puede cargar` | PowerShell tiene restringida la ejecución de scripts. | Utilizar `npm.cmd` en lugar de `npm`. |
| `PSSecurityException` | Restricción de seguridad de PowerShell. | Ejecutar `npm.cmd -v` para comprobar el funcionamiento. |
| `npm no se reconoce` | npm no está disponible en la terminal. | Verificar Node.js, reiniciar VS Code y probar `npm.cmd -v`. |
| `ENOENT: no such file or directory` | El archivo o carpeta solicitado no existe. | Comprobar la ubicación con `pwd` y revisar los archivos con `dir`. |
| `Missing script: start` | No existe un script llamado `start` en `package.json`. | Utilizar `node servidor.js` o configurar un script `start`. |
| `Cannot find module 'express'` | Express no está instalado en el proyecto. | Ejecutar `npm.cmd install express`. |
| `Cannot find module 'dotenv'` | Falta instalar dotenv. | Ejecutar `npm.cmd install dotenv`. |
| `EADDRINUSE: address already in use` | El puerto del servidor está ocupado. | Detener el servidor anterior con `Ctrl + C` o utilizar otro puerto. |
| `ERR_CONNECTION_REFUSED` | El servidor no está ejecutándose o el puerto es incorrecto. | Ejecutar `node servidor.js` y verificar la dirección. |

## 3. Solucionar el error de PowerShell

Uno de los errores más comunes aparece al ejecutar:

```powershell
npm -v
```

Mensaje:

```text
npm.ps1 no se puede cargar porque
la ejecución de scripts está
deshabilitada en este sistema.
```

### Solución recomendada

No es necesario reinstalar Node.js.

Utilizar:

```powershell
npm.cmd -v
```

Para inicializar el proyecto:

```powershell
npm.cmd init -y
```

Para instalar dependencias:

```powershell
npm.cmd install express mysql2 bcryptjs express-session dotenv
```

### Solución alternativa

Si se desea utilizar `npm` normalmente, se puede configurar PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Esta configuración modifica la política de ejecución de scripts para el usuario actual. Debe realizarse solamente si está permitido en la computadora.

## 4. Comandos fundamentales

| Comando | ¿Para qué sirve? |
|---|---|
| `node -v` | Consultar la versión de Node.js. |
| `npm.cmd -v` | Consultar la versión de npm. |
| `mkdir sistema-login` | Crear la carpeta del proyecto. |
| `cd sistema-login` | Ingresar a la carpeta del proyecto. |
| `dir` | Mostrar archivos y carpetas. |
| `npm.cmd init -y` | Crear el archivo `package.json`. |
| `npm.cmd install` | Instalar las dependencias definidas en `package.json`. |
| `node servidor.js` | Ejecutar el servidor. |
| `Ctrl + C` | Detener el servidor en ejecución. |

## 5. Dependencias de nuestro proyecto

Ejecutar dentro de la carpeta principal:

```powershell
npm.cmd install express mysql2 bcryptjs express-session dotenv
```

| Dependencia | Funcionalidad |
|---|---|
| Express | Crear el servidor web. |
| MySQL2 | Conectar con MySQL. |
| Bcryptjs | Proteger contraseñas. |
| Express-session | Administrar sesiones. |
| Dotenv | Utilizar variables de entorno. |

## 6. Comprobar que el proyecto funciona

Una vez configurado `servidor.js`, ejecutar:

```powershell
node servidor.js
```

Abrir:

`http://localhost:3000`

Si la página aparece correctamente, el servidor está funcionando.

## 7. ¿Qué hacer si aparece un error?

Antes de solicitar ayuda:

1. Leer el mensaje completo de la terminal.
2. Identificar el comando que produjo el error.
3. Buscar el problema en esta guía.
4. Aplicar la solución correspondiente.
5. Volver a ejecutar el comando.

Si el problema continúa, realizar una captura de pantalla que muestre el comando ejecutado y el mensaje de error completo.

**Importante:** nunca compartir contraseñas ni el contenido del archivo `.env` en capturas o repositorios públicos.

---

**Recordatorio:** Todos los archivos desarrollados y las modificaciones realizadas durante las clases deberán guardarse y sincronizarse con el repositorio de GitHub correspondiente. El archivo `.env` y la carpeta `node_modules` no deben subirse.