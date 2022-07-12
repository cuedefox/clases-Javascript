let nombreStorage = "Rodrigo";
let emailStorage = "rodrigovergara2001@gmail.com";
let edadStorage = 21;
localStorage.setItem("nombre", nombreStorage);
localStorage.setItem("email", emailStorage);
localStorage.setItem("edad", edadStorage);
let nombre = localStorage.getItem("nombre");
let email = localStorage.getItem("email");
let edad = localStorage.getItem("edad");
console.log(`Nombre: ${nombre}\nEdad: ${edad}\nEmail: ${email}`);

let nombreSStorage = "Lucy";
let emailSStorage = "Lucy@lucy.lucy";
let edadSStorage = 25;
sessionStorage.setItem("nombre", nombreSStorage);
sessionStorage.setItem("email", emailSStorage);
sessionStorage.setItem("edad", edadSStorage);
let nombreS = sessionStorage.getItem("nombre");
let emailS = sessionStorage.getItem("email");
let edadS = sessionStorage.getItem("edad");
console.log(`Nombre: ${nombreS}\nEdad: ${edadS}\nEmail: ${emailS}`);

for(let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log(`${clave}: ${localStorage.getItem(clave)}`);
}

let btnDeleteName = document.querySelector("#deleteName");
let btnDeleteMail = document.querySelector("#deleteMail");
let btnDeleteLStorage = document.querySelector("#deleteLStorage");

btnDeleteName.onclick = () => localStorage.removeItem("nombre");
btnDeleteMail.onclick = () => localStorage.removeItem("mail");
btnDeleteLStorage.onclick = () => localStorage.clear();

const producto = {id: 0, nombre: "caca"};
const productoJson = JSON.stringify(producto);
const conversion = JSON.parse(productoJson);

console.log(producto);
console.log(productoJson);
console.log(conversion);
console.log(typeof producto);
console.log(typeof productoJson);
console.log(typeof conversion);

localStorage.setItem("producto0", productoJson);

let productos = [];
let formulario;
let inputNombre;
let inputPrecioCompra;
let inputPrecioVenta;
let inputCantidad;
let tabla;

class Producto {
    constructor(nombre, precioCompra, precioVenta, cantidad) {
        this.nombre = nombre;
        this.precioCompra = precioCompra;
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}

function inicializarElementos() {
    formulario = document.querySelector("#formulario");
    inputNombre = document.querySelector("#inputNombreProducto");
    inputPrecioCompra = document.querySelector("#inputPrecioCompra");
    inputPrecioVenta = document.querySelector("#inputPrecioVenta");
    inputCantidad = document.querySelector("#inputCantidad");
    tabla = document.querySelector("#tableProductos");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    let precioCompra = parseFloat(inputPrecioCompra.value);
    let precioVenta = parseFloat(inputPrecioVenta.value);
    let cantidad = parseFloat(inputCantidad.value);
    let producto = new Producto(nombre, precioCompra, precioVenta, cantidad);
    productos.push(producto);
    formulario.reset();
    limpiarTabla();
    agregarTabla();
    almacenarProductosLocalStorage();
}

function agregarTabla() {
    productos.forEach((producto) => {
        let filaTabla = document.createElement("Tr");
        filaTabla.innerHTML = `
        <td>${producto.nombre}</td>
        <td>${producto.precioCompra}</td>
        <td>${producto.precioVenta}</td>
        <td>${producto.cantidad}</td>`;
        tabla.tBodies[0].append(filaTabla);
    });
}

function limpiarTabla() {
    while(tabla.rows.length > 1) {
        tabla.deleteRow(1);
    }
}

function almacenarProductosLocalStorage() {
    localStorage.setItem("listaProductos", JSON.stringify(productos));
}

function obtenerProductosLocalStorage() {
    let productosalmacenados = localStorage.getItem("listaProductos");
    if (productosalmacenados !== null) {
        productos = JSON.parse(productosalmacenados);
    }
}

function main() {
    inicializarElementos();
    inicializarEventos();
    obtenerProductosLocalStorage();
    agregarTabla();
}

main();