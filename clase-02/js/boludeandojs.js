let calificacionUno = prompt("Ingrese la primer calificacion");
let calificacionDos = prompt("Ingrese la segunda calificacion");
let promedio = (parseFloat(calificacionUno) + parseFloat(calificacionDos)) / 2;

if (calificacionUno >= 6 && calificacionDos >=6) {
    alert("Aprobado\nSu promedio es: " + promedio);
}
else {
    alert("Desaprobado\nSu promedio es: " + promedio);
}

// si un estatus es igual a 200 o 201 es una solicitud exitosa

let estatus = prompt("Ingrese el estatus");

if (estatus == 200 || estatus == 201) {
    alert("Solicitud Exitosa");
}
else {
    alert("Hay un error en la solicitud 10001101010111000010101000101101010101010111000101010111000101011010101010101011000111100100110011")
}

//estrictamente igual === - estrictamente desigual !==
let numeroEstricto1 = 1;
let numeroEstricto2 = 1;

if (numeroEstricto1 === numeroEstricto2) {
    alert("Son estrictamente iguales")
}
else if (numeroEstricto1 == numeroEstricto2) {
    alert("Son iguales");
}
else {
    alert("son iguales")
}

let numeroEstricto3 = "1";
let numeroEstricto4 = 1;

if (numeroEstricto3 != numeroEstricto4) {
    alert("Son desiguales");
}
else if (numeroEstricto3 !== numeroEstricto4) {
    alert("Son estrictamente desiguales");
}
else {
    alert("son iguales");
}

//Condicional, operador not !, ! invierte el contenido

let condicional = true;

alert(!condicional);
