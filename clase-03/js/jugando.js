let tabla = parseFloat(prompt("Ingresa un numero para ver su tabla"));
let saltear = parseFloat(prompt("Si te queres saltear una multiplicacion escribi un numero del 1 al 10"));
for (i = 1; i <= 10; i++) {
    let resultado = i * tabla;
    if (i === saltear) {
        continue;
    }
    else {
        alert(`${i} X ${tabla} = ${resultado}`);
    }
}

let cantidadCalificaciones = parseInt(prompt("Ingrese el numero de calificaciones a promediar"))
let sumatoria = 0;
let promedio = 0;

for (let i = 1; i <= cantidadCalificaciones; i++) {
    let calificacion = parseFloat(prompt(`Ingrese la calificacion ${i}`))
    sumatoria = sumatoria + calificacion;
}
promedio = sumatoria / cantidadCalificaciones;
alert(`Su promedio es de ${promedio}`)