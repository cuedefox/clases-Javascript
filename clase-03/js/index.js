// el break rompe el ciclo, continue saltea la iteracion
for (let i=0; i<=10; i++) {
    if (i == 5) {
        continue;
    }
    if (i > 9) {
        break;
    }
    alert(`hay ${i} putas`);
}
let numeroParaTabla = parseFloat(prompt("Ingresa un numero y te voy a mostrar la tabla"))
for (let t=1; t<=10; t++) {
    let resultado = numeroParaTabla * t;
    alert(`${numeroParaTabla} X ${t} es igual a = ${resultado}`);
}

// while es para que mientras se repita la condicion indicada se ejecuta el bloque de codigo dentro del bucle
/*let contraseña = prompt("Ingresar contraseña");

while (contraseña != "timecrisis") {
    alert(`La contraseña ${contraseña} es incorrecta, ingresar otra contraseña`);
    contraseña = prompt("Ingresar contraseña");
}*/

// do... while, garantiza que el bloque de codigo se ejecute al menos una vez
let contraseña;
do {
    contraseña = prompt("Ingresa contraseña")
    alert(`La contraseña ingresada es ${contraseña}`)
}
while (contraseña != "timecrisis")

// switch es mas ordenado que el if, se usa como un if else.
let valor = 1;
switch(valor) {
    case 1:
        console.log("valor 1");
        break;
    case 2:
        console.log("valor 2");
        break;
    default:
        console.log("Valor desconocido");
        break;
}