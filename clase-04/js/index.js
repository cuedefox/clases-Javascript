// Las funciones contienen un bloque de codigo que puede ser ejecutado al llamarse
function pedirNombre() {
    let nombre = prompt("Ingrese su nombre");
    alert(`El nombre ingresado es ${nombre}`);
}
pedirNombre();
pedirNombre();
pedirNombre();

// Tambien almacena variables para utilizar distintos valores
function alerta(palabra1, palabra2) {
    alert(`${palabra1} ${palabra2}`)
}

alerta("hola", "puto");
alerta("todas", "putas");
alerta("error", "grave");

let numero1;
let numero2;
let total;
function sumar(numero1, numero2) {
    total = numero1 + numero2;
}
function mensaje(mensaje) {
    alert(mensaje);
}

numero1 = parseFloat(prompt("Calculadora\nIngrese 2 numeros para sumarlos\nIngrese el primer numero"));
numero2 = parseFloat(prompt("Ingrese el segundo numero"));

sumar(numero1, numero2);
mensaje(total);
 
// 