// el break rompe el ciclo
for (let i=0; i<=10; i++) {
    if (i > 3) {
        break;
    }
    alert(`hay ${i} putas`);
}
let numeroParaTabla = parseFloat(prompt("Ingresa un numero y te voy a mostrar la tabla"))
for (let t=1; t<=10; t++) {
    let resultado = numeroParaTabla * t;
    alert(`${numeroParaTabla} X ${t} es igual a = ${resultado}`);
}
