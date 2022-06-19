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
 
// el return devuelve lo que se le ordene, ejemplo sustituyendo lo anterior
function suma(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = suma(7,4);
alert(resultado);

// Si una variable se declara en la raiz o fuera de cualquier bloque es una variable global, si no es local y solo puede usarse en ese bloque
let global;
function locales() {
    let local;
    local = 132;
}
function otrasLocales() {
    let local;
    local = 400;
}

// las funciones anonimas no tienen nombre y se usan para ser asignado a una variable
const suma1 = function (a, b) {return a + b};
const resta1 = function (a, b) {return a - b};

console.log(suma1(4, 8));
console.log(resta1(10, 8));

// Las funciones flecha son funciones anonimas simplificadas con =>, cambia la sintaxis y es la forma correcta de declararlas
const suma2 = (a, b) => {return a + b};
const resta2 = (a, b) => a - b;

console.log(suma2(7, 8));
console.log(resta2(100, 73));

const iva = x => x * 0.21;

let precioProducto = 500;
let descuento = 50;
let nuevoPrecio = resta2(suma2(precioProducto, iva(precioProducto)), descuento);

console.log(nuevoPrecio);

