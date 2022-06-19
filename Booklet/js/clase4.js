// Actividad 1
function entrada () {
    let nombre = prompt("¿Que sos?");
    return nombre;
}
function procesar (sos) {
    let procesar = `AAAAA SOS RE ${sos}`;
    return procesar;
}
function salida (es) {
    alert(es);
}

salida(procesar(entrada()));

// Actividad 2
function redondeo (valor) {
    return Math.round(valor);
}

for (i = 1; i <= 5; i++) {
    let redondear = prompt("Ingrese un numero con decimales a redondear")
    alert(redondeo(redondear));
}

// Actividad 3
function impuesto(precios, porcentajes) {
    let porcentaje = porcentajes / 100;
    let total = precios * porcentaje;
    return precios + total;
}
for (i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt("Calculadora de porcentaje\nIngrese el precio y luego el porcentaje y le diremos el total de impuestos\nIngrese precio"));
    let porcentaje = parseInt(prompt("Ingrese porcentaje del impuesto a cobrar, del 1 al 100"));
    alert(`El total es ${impuesto(precio, porcentaje)}`);
}

// Actividad 4
function cotizarDolar(pesos) {
    return pesos / 200;
}
function cotizarPeso(dolar) {
    return dolar * 200;
}

let tipoCotizar = parseInt(prompt("Bienvenido al cotizador\nSi quiere cambiar pesos por dolares presione 1 si quiere cambiar dolares por pesos presione 2"));

if (tipoCotizar == 1) {
    let pesos = parseFloat(prompt("¿Cuantos pesos ingresara?"));
    alert(`El total es de ${cotizarDolar(pesos)} dolares`);
}else if (tipoCotizar == 2){
    let dolares = parseFloat(prompt("¿Cuantos dolares ingresara?"));
    alert(`El total es de ${cotizarPeso(dolares)} pesos`);
}else {
    alert("Error")
}

// Actividad 5
function validacion(cadena) {
    let valor;
    if (cadena != "") {
        valor = true;
    }else {
        valor = false;
    }
    return valor;
}
let validar;
while (validar != "ESC") {
    validar = prompt("Ingrese un mensaje");
    alert(validacion(validar));
}