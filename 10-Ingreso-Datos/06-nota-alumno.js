// INGRESO DE NOTA

let alumno = prompt("Nombre del alumno:");
let nota = Number(prompt("Ingresá la nota:"));

if (nota >= 6) {
    console.log(alumno, "APROBÓ con", nota);
} else {
    console.log(alumno, "DESAPROBÓ con", nota);
}
