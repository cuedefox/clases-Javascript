// 3 formas de escuchar eventos
let boton1 = document.getElementById("btn1");
let boton2 = document.getElementById("btn2");

boton1.addEventListener("click", () => {
    alert("Se oprimio el boton tipo de evento 1 :D")
});

boton2.onclick = () => {
    alert("Se oprimio el boton tipo de evento 2 :o")
};

function alertaEv3() {
    alert("Se oprimio el boton tipo de evento 3\n TIRITIPATIRITOUDOU TIPARIDIDOU TIRITIRITIPIRITIRITITURERURERURERUREDOUUU");
};

// Eventos del mouse
let botonMouse1 = document.getElementById("btn-mouse1");
let botonMouse2 = document.getElementById("btn-mouse2");
let botonMouse3 = document.getElementById("btn-mouse3");
let botonMouse4 = document.getElementById("btn-mouse4");
let botonMouse5 = document.getElementById("btn-mouse5");

botonMouse1.onmousedown = () => {
    console.log("Evento mouse down")
};
botonMouse2.onmouseup = () => {
    console.log("Evento mouse up")
};
botonMouse3.onmouseover = () => {
    console.log("Evento mouse over")
};
botonMouse4.onmouseout = () => {
    console.log("Evento mouse out")
};
botonMouse5.onmousemove = () => {
    console.log("Evento mouse move")
};

// Eventos de teclado
let inputNombre = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");

inputNombre.onkeydown = () => {
    console.log("Se oprimio una tecla")
};
inputNombre.onkeyup = () => {
    console.log("Se solto una tecla")
};
inputEdad.onchange = () => {
    console.log("Se cambio de formulario de edad")
};
inputNombre.onchange = () => {
    console.log("Se cambio de formulario de nombre")
};
inputNombre.oninput = () => {
    console.log("oninput nombre")
};
inputEdad.oninput = () => {
    console.log("oninput edad")
};

// Formulario
let formulario = document.getElementById("formulario");
let inputNombreProducto = document.getElementById("inputNombreProducto");
let inputPrecioCompra = document.getElementById("inputPrecioCompra");
let inputPrecioVenta = document.getElementById("inputPrecioVenta");
let inputCantidad = document.getElementById("inputCantidad");
let productos = [];
class producto {
    constructor(nombre, preciocompra, precioventa, cantidad) {
        this.nombre = nombre.toUpperCase();
        this.preciocompra = preciocompra;
        this.precioventa = precioventa;
        this.cantidad = cantidad;
    }
}

formulario.onsubmit = (event) => validarFormulario(event);

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombreProducto.value;
    let precioCompra = inputPrecioCompra.value;
    let precioVenta = inputPrecioVenta.value;
    let cantidad = inputCantidad.value;
    let product = new producto(nombre, precioCompra, precioVenta, cantidad);
    productos.push(product);
    formulario.reset();
    console.log(productos);
}