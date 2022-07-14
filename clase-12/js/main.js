// Operador ternario (if else)
let edad = parseInt(prompt("Ingresa tu edad"));
const permiso = edad >= 18 ? true : false;
permiso ? alert("Podes pasar") : alert("No podes pasar");

// Operador logico and (if)
const carrito = [1, 3];
let tamanio = carrito.length > 0 && carrito.length;
carrito.length === 0 && alert("Carrito Vacio! :O");
console.log(tamanio);

// Operador logico OR (||), toma 2 valores, si el primero es FALSY toma el 2do
console.log(0 || "Falsy"); // Falsy
console.log(40 || "Falsy"); // 40
console.log(null || "Falsy"); // Falsy
console.log(undefined || "Falsy"); // Falsy
console.log("Hola Mundo" || "Falsy"); // Hola Mundo
console.log("" || "Falsy"); // Falsy
console.log(NaN || "Falsy"); // Falsy
console.log(true || "Falsy"); // true
console.log(false || "Falsy"); // Falsy

const usuario = {
    id: 0,
    nombre: "Rodrigo",
    edad: 21,
    telefono: {
        casa: 1123142315,
        cel: 1132532343,
        trabajo: null,
    },
};
const usuario2 = null;
console.log(usuario || "El usaurio no existe");
console.log(usuario2 || "El usaurio no existe");

/*Nulish (??) Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite
 más valores como ‘verdaderos’. En este caso, sólo obtenemos nullish en dos casos:*/
console.log( 0 ?? "Nullish");  // 0
console.log( 40 ?? "Nullish");  // 40
console.log( null ?? "Nullish");  // Nullish
console.log( undefined ?? "Nullish");  // Nullish
console.log( "Hola Mundo" ?? "Nullish");  // Hola Mundo
console.log( "" ?? "Nullish");  // ""
console.log( NaN ?? "Nullish");  // NaN
console.log( true ?? "Nullish");  // true
console.log( false ?? "Nullish");  // false

const usuarioNull = null;
//console.log( usuarioNull.nombre || "El usuario no existe" );
// Error: "No se pueden leer propiedades de NULL"
console.log( usuarioNull?.nombre || "El usuario no existe");
// "El usuario no existe"


// DESESTRUCTURACIÓN sirve para generar variables en base a las propiedades de un objeto
const {nombre, telefono:{cel}} = usuario;
console.log(nombre);
console.log(cel);

// Alias sirve para darle un nombre alternativo a una variable generada en una DESESTRUCTURACIÓN
const item = {
    item_id: 432,
    product_name: "Some product",
    price_per_unit: 5600
};

const {item_id: id, product_name: nombreItem, price_per_unit: precio} = item;

console.log(id); // 432
console.log(nombreItem); // "Some product"
console.log(precio); // 5600

// Desestructuracion en parametros
const imprimirIdNombre = ({id, nombre})=> {console.log(id, nombre)};
imprimirIdNombre(usuario);

// Desestructurar ARRAYS el , sin nada saltea posiciones
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [,a, b] = nombres;

console.log(a); // "Juan"
console.log(b); // "Julieta"

// spread operator desparrama el contenido de un array u objeto
console.log(...nombres);
const numeros = [4, 77, 92, 10, 3, -32, 54, 11];
console.log(Math.max(...numeros)); // 92

const usuario3 = {
    nombre: "Juan",
    edad: 24,
    curso: "Javascript"
}
// lista todas las propiedades y valores de usuario1 dentro de otro objeto, SI HAY 2 PROPIEDADES IGUALES QUEDA LA ULTIMA
const usuario4 = {
    ...usuario3,
};
console.log(usuario4); // { nombre: 'Juan', edad: 24, curso: 'Javascript' }
const usuario5 = {
    ...usuario3,
    curso: "ReactJS",
    email: "juan@doe.com",
};
console.log(usuario5);
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

// Rest parameters
function sumar(...numeros) {
    return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ); // 6
console.log( sumar(10, 15, 30, 5) ); // 60
console.log( sumar(100, 300, 50) ); // 450