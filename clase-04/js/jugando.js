let suma1;
let suma2;
let suma3;
let cantidadNotas;
let total;

function promedioTrim (cantidadNotas) {
    let suma = 0;
    for (let i = 1; i <= cantidadNotas; i++) {
        let valores = parseFloat(prompt(`Ingrese la calificacion ${i}`));
        suma = valores + suma;
    }
    let promedio = suma / cantidadNotas;
    return promedio;
}
function promedioTotal (suma1, suma2, suma3) {
    let total = (suma1 + suma2 + suma3) / 3;
    return total;
}

alert("Esto es una calculadora de promedio total\nvamos a preguntarte cuantas notas tenes por trimestre y al final vamos a darte el promedio de los 3 trimestres")
cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas del primer trimestre"))
suma1 = promedioTrim(cantidadNotas);
cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas del segundo trimestre"))
suma2 = promedioTrim(cantidadNotas);
cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas del tercer trimestre"))
suma3 = promedioTrim(cantidadNotas);
total = promedioTotal(suma1, suma2, suma3);
alert(`Resultados:\nTrimestre 1: ${suma1}\nTrimestre 2: ${suma2}\nTrimestre 3: ${suma3}\nTotal: ${total}`)