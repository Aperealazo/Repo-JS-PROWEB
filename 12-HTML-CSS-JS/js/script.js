// JAVASCRIPT DE LA PÁGINA

console.log("La página se cargó correctamente");

function mostrarMensaje() {

    let nombre = prompt("¿Cómo te llamás?");

    if (nombre) {
        alert("¡Bienvenido, " + nombre + "! Ya sos parte de la hinchada.");
    } else {
        alert("No ingresaste ningún nombre.");
    }
}
