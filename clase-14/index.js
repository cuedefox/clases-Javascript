setTimeout(() => {console.log("hola")}, 4000);

console.log("inicia proceso");
let mitad = setTimeout(() => {console.log("mitad proceso");}, 3000);
clearTimeout(mitad);
console.log("final proceso");

let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(contador);
    contador>=10 && clearInterval(intervalo);
}, 1000);

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        }, 2000)
    })
}

console.log( eventoFuturo(true) ) // Promise { <pending> }
console.log( eventoFuturo(false) ) // Promise { <pending> }

eventoFuturo(true).then((response)=> {
    console.log(response);
}).catch((response)=> {
    console.log(response)
}).finally(()=> {
    console.log("final del proceso");
});
eventoFuturo(false).then((response)=> {
    console.log(response);
}).catch((response)=> {
    console.log(response)
}).finally(()=> {
    console.log("final del proceso");
});

const contenedor = document.querySelector("#contenedor");
let productos = [];

const BD = [
    {id: 1, nombre: 'Producto 1', precio: 1500},
    {id: 2, nombre: 'Producto 2', precio: 2500},
    {id: 3, nombre: 'Producto 3', precio: 3500},
    {id: 4, nombre: 'Producto 4', precio: 3500},
]

const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD);
        }, 3000)
    })
}

const pintarProductos = () => {
    productos.forEach((producto) => {
        const columna = document.createElement("div");
        columna.innerHTML = `<div><p>${producto.id}</p><p>${producto.nombre}</p><p>${producto.precio}</p></div>`;
        contenedor.appendChild(columna);
    })
}

pedirProductos().then((response) => {
    productos = [...response]
    console.log(response);
    pintarProductos();
}).catch((error) => {
    console.log(error);
})