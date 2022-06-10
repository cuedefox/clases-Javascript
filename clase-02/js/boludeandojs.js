let calificacionUno = prompt("Ingrese la primer calificacion");
let calificacionDos = prompt("Ingrese la segunda calificacion");
let promedio = (parseFloat(calificacionUno) + parseFloat(calificacionDos)) / 2;

if (calificacionUno >= 6 && calificacionDos >=6) {
    alert("Aprobado\nSu promedio es: " + promedio);
}
else {
    alert("Desaprobado\nSu promedio es: " + promedio);
}