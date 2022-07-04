console.dir(document);
console.dir(document.head);
console.dir(document.body);

let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

let seccion = document.getElementById("seccion1");
console.log(seccion.innerHTML);

let producto = document.getElementsByClassName("producto");
console.log(producto[0].innerHTML);
console.log(producto[2].innerHTML);
console.log(producto[3].innerHTML);
console.log(producto);
console.log(producto[1]);

let div = document.getElementsByTagName("div");
console.log(div);
for (const elemento of div) {
    console.log(elemento.innerHTML);
}

console.log(titulo.innerText);
titulo.innerText = "chupa pija :D";
console.log(titulo.innerText);

let seccion2 = document.getElementById("seccion2");
console.log(seccion2);
seccion2.innerHTML = "<h2>todas putas</h2> <p>Putaputa ajsoshansjkfasdhjasdkad</p>";
console.log(seccion2);

seccion2.className = "container";
console.log(seccion2);

let parrafo = document.createElement("p");

let inputmail = document.getElementById("inputmail");
let inputcontrasenia = document.getElementById("inputcontrasenia");
inputmail.value = "correo@correo.punto";

let seccion2y2 = document.querySelector("#seccion2");
console.log(seccion2y2);
//queryselector tambien puede seleccionar un elemento con su pseudoclases
//queryselectorall sirve para seleccionar a todos los elementos que coincidan

let productos = [
    {
        id: 1,
        nombre: "Call of duty",
        precioCompra: "500",
        precioVenta: "950",
        cantidad: 12,
    },
    {
        id: 2,
        nombre: "Cuede",
        precioCompra: "300",
        precioVenta: "600",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Maincra",
        precioCompra: "600",
        precioVenta: "750",
        cantidad: 8,
    },
    {
        id: 4,
        nombre: "Puta",
        precioCompra: "0",
        precioVenta: "950",
        cantidad: 21,
    }
];

let contenedorProductos = document.getElementById("contenedor-productos");
for (const producto of productos) {
    let columna = document.createElement("div");
    columna.className = "col-md-4 mt-3";
    columna.id = `columna-${producto.id}`;
    columna.innerHTML = `
        <div class="card">
            <div class="card-body">
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio de compra: <b>${producto.precioCompra}</b></p>
                <p class="card-text">Precio de venta: <b>${producto.precioVenta}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
            </div>
        </div>
    `;
    contenedorProductos.append(columna);
    console.log(contenedorProductos);
}
let columnaBorrar = document.getElementById("columna-1");
columnaBorrar.remove();