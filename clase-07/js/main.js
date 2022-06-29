/*una funcion de orden superior Es aquella que bien retorna una función, o recibe una función por parámetro. 
Este tipo de funciones nos permiten abstraernos sobre acciones y no sólo valores. 
En esta clase, nos concentraremos más en la segunda acepción.*/

// Se pueden retornar funciones dentro de otras
function mayorQue(a) {
    return (b) => b > a;
}

const mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(11));
console.log(mayorQueDiez(7));
console.log(mayorQueDiez(17));

function operaciones(op) {
    if(op == "Sumar") {
        return(a, b) => a + b;
    }else if(op == "Restar") {
        return(a, b) => a - b;
    }
}
const sumar = operaciones("Sumar");
const restar = operaciones("Restar");

console.log(sumar(8, 29));
console.log(restar(40, 17));

// recibir funciones por parametro es posible, esto se hace para aplicar una funcion u otra a determinado parametro
function porCadaUno(arr, fn) {
    for(const el of arr) {
        fn(el);
    }
}

let numeros = [1, 2, 3, 4];
porCadaUno(numeros, console.log);

/* Es normal usar la funcion parametro como una arrow function (=>), ya que es mas dinamico
Te complicaste bastante aca rodri, fijate siempre que el segundo parametro es una funcion ANONIMA y trabaja
con su propio parametro */
let numeros2 = [];

porCadaUno(numeros, (el)=> numeros2.push(el * 2));
console.log(numeros2);

// For each es como la funcion que cree mas arriba, itera una funcion para cada parametro de un array
numeros.forEach((num) => console.log(num));
numeros2.forEach((num) => console.log(num));

/*El método find() recibe una función de comparación por parámetro. Captura el elemento que se está 
recorriendo y retorna true o false según la comparación ejecutada. El método retorna el primer elemento que 
cumpla con esa condición */
const juegos = [];
class juego {
    constructor(nombre, precio, año) {
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}
juegos.push(new juego("Final Fantasy", 310, 1987));
juegos.push(new juego("Battlefront 2", 1500, 2017));
juegos.push(new juego("Demiroth", 100, 2023));

let entrada = prompt("Busca juego por nombre");
console.log(juegos.find((el) => el.nombre === entrada));
let busqueda = juegos.find((el) => el.nombre === entrada);
if(busqueda) {
    alert(`SIs tenemos ${entrada}`);
}else {
    alert(`No tenemos ${entrada} :C`);
}

/*El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo 
array con todos los elementos que cumplan esa condición.  Si no hay coincidencias, retornará un array vacío.*/
console.log(juegos.filter((el) => el.precio > 300));
console.log(juegos.filter((el) => el.año > 2000));

let entrada2 = parseFloat(prompt("Ingrese su presupuesto y te dire que juegos puedes comprar"));
let puedeComprar = juegos.filter((el => el.precio < entrada2));
console.log(puedeComprar);
let juegosQuePuedeComprar = "";
for(let i = 0; i < puedeComprar.length; i++) {
    console.log(puedeComprar[i].nombre);
    juegosQuePuedeComprar += (`${puedeComprar[i].nombre}, `);
}
console.log(juegosQuePuedeComprar);
alert(`Puedes comprar ${juegosQuePuedeComprar}`);

/*El método some() funciona igual que el find() recibiendo una función de búsqueda. En vez de retornar el
 elemento encontrado, some() retorna true o false según el resultado de la iteración de búsqueda. */
console.log(juegos.some((el) => el.nombre === "Final Fantasy"));
console.log(juegos.some((el) => el.nombre === "Demiroth"));
console.log(juegos.some((el) => el.nombre === "Call of Duty"));

/*El método map() crea un nuevo array con todos los elementos del original transformados según las
 operaciones de la función enviada por parámetro. Tiene la misma cantidad de elementos pero los almacenados 
 son el return de la función */
 let mapa = juegos.map((el) => el.nombre);
 console.log(mapa);
 mapa = juegos.map((el) => el.año);
 console.log(mapa);
let subirPrecios = juegos.map((el) => {return {nombre: el.nombre, precio: el.precio * 1.30}});
console.log(subirPrecios);

 /* El método reduce() nos permite obtener un único valor tras iterar sobre el array. Funciona como un método 
 que resume el array a un único valor de retorno. */
//  el segundo valor es la inicializacion de la funcion
let reducido = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(reducido);
let carrito = [];
carrito.push(new juego("Dorime", 100, 1999));
carrito.push(new juego("Dorima", 1050, 2999));
carrito.push(new juego("Dorime", 480, 1989));
let totalCarrito = carrito.reduce((tot, el) => tot + el.precio, 0);
console.log(totalCarrito);

/*El método sort() nos permite reordenar un array según un criterio que definamos. Recibe una función de 
comparación por parámetro que, a la vez, recibe dos elementos del array. La función retorna un valor numérico 
(1, -1, 0) que indica qué elemento se posiciona antes o después.*/
const numerosSort = [10, 666, 115, 3, 45];
numerosSort.sort((a,b) => a - b);
console.log(numerosSort);
numerosSort.sort((a,b) => b - a);
console.log(numerosSort);
// Con strings se mide la longitud, de esta manera
juegos.sort((a,b) => {
    if(a.nombre > b.nombre) {
        return 1;
    }else if(a.nombre < b.nombre) {
        return -1;
    }else {
        return 0;
    }
});
console.log(juegos);

/*Javascript provee el objeto Math que funciona como un contenedor de herramientas y métodos para realizar
operaciones matemáticas. */
console.log(Math.E);
console.log(Math.PI);

/*Los métodos de Math.min() y Math.max() reciben una serie de argumentos numéricos y devuelven aquel de valor
máximo o mínimo, según corresponda: */
console.log(Math.max(100, -5, -666, 666, Infinity));
console.log(Math.max(100, -5, -666, 666, 5132, 213, 9475, 1023));
console.log(Math.min(100, -5, -666, 666, 5132, 213, 9475, 1023));
console.log(Math.min(100, -5, -666, 666, -Infinity));

/*ceil, floor y round Sirven para redondear un valor numérico a un número entero cercano */
const pi = Math.PI;
console.log(Math.ceil(pi)); //ceil redondea al numero mayor mas proximo
console.log(Math.floor(pi)); //floor redondea al numero menor mas proximo
console.log(Math.round(pi)); //round redondea al numero mas proximo

/*El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método 
retorna NaN.*/
console.log(Math.sqrt(9));
console.log(Math.sqrt(27));
console.log(Math.sqrt(25));
console.log(Math.sqrt(116));
console.log(Math.sqrt(65536));
console.log(Math.sqrt(-115));

/*El método Math.random() genera un número pseudo-aleatorio entre 0 y 1, siendo el 0 límite inclusivo y el 
1 exclusivo.*/
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
/*Para generar números aleatorios dentro de un rango deseado, distinto de 0-1, podemos multiplicar su resultado
 por el rango esperado. A la vez podemos sumar el límite inferior si lo necesitamos: */
console.log(Math.random() * 10);
console.log(Math.random() * 500);
console.log(Math.random() );
/*Al usar Math.round, esta función retornará números aleatorios en el rango de 0-100 inclusive. Si usara 
Math.ceil los números irían de 1 a 100, ya que siempre redondeará hacia arriba; y si usa Math.floor el rango
 sería de 0 a 99. */
const generadorNumeros = () => {
    return Math.ceil(Math.random() * 100);
}
console.log(generadorNumeros());
console.log(generadorNumeros());
console.log(generadorNumeros());

// Instanciar un objeto Date nos genera la fecha y tiempo actual
console.log(new Date);

/*El constructor de la clase Date nos permite crear objetos date con fechas diferentes. Puede recibir
parámetros en el orden año, mes, día, hora, minutos, segundos, milisegundos (todos tipo number). 

La convención con la que trabaja Javascript para construir fechas cuenta los meses a partir del 0
(0 = enero, 11 = diciembre) y los días a partir del 1*/
const porCambiarAño = new Date(2022, 11, 31, 23, 59, 59);
console.log(porCambiarAño);

// Tambien se puede hacer con un string especifico
const cumpleaños = new Date("July 10, 2001 10:50:47");
console.log(cumpleaños);

/*Instanciado un objeto Date, podemos aplicar distintos métodos que nos devuelven determinados valores de 
la misma.*/
console.log(cumpleaños.getFullYear()); // devuelve el año
console.log(cumpleaños.getMonth()); // devuelve el numero del mes -1
console.log(cumpleaños.getDay()); // devuelve el dia (martes)

/* La clase también tiene distintos métodos que presentan la fecha con distintos formatos posibles de tipo 
string. Según la utilidad que queramos presentar, podemos optar por alguna de las siguientes opciones, aunque
hay más disponibles que pueden investigar en la documentación*/
const hoy = new Date("December 17, 2021");

console.log(hoy.toDateString()); // Fri Dec 17 2021
console.log(hoy.toLocaleString()); // 17/12/2021 00:00:00
console.log(hoy.toLocaleDateString()); // 17/12/2021
console.log(hoy.toTimeString()); // 00:00:00 GMT-0300 (hora estándar de Argentina)

/*Los resultados de las diferencias entre fechas se generan en milisegundos. Si quisiera calcular la
diferencia de días entre dos fechas habría que generar cálculos adicionales sobre esta diferencia en 
milisegundos. Por suerte, existen librerías que solucionan estos problemas de forma eficiente y rápida, pero 
las trabajaremos en clases posteriores.*/
const navidad = new Date("December 25, 2021");
const hoy2 = new Date("December 17, 2021");

console.log( navidad - hoy2 ); // 691200000

const milisegundosPorDia = 86400000;

console.log( (navidad - hoy2 ) / milisegundosPorDia); // 8
