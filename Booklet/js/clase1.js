// Actividad 1
let nombre = "Homero";
let apellido = "Sampson";
let edad = 40;
console.log(nombre);
console.log(apellido);
console.log(edad);
// Actividad 2
const ciudad1 = "San pedro";
const ciudad2 = "Villa adelina";
const ciudad3 = "Boulogne";
const ciudad4 = "Villa sandia";
const ciudad5 = "la vecindad del chavo";
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

// Actividad 3
let nombreCar = "Rodrigo";
let apellidoCar = "Vergara";
let edadCar = "20";
let ciudadCar = "San isidro";
let vencimientoCar = "10/2029";

let carnet = `${nombreCar} ${apellidoCar} ${edadCar}\n${ciudadCar} ${vencimientoCar}`
console.log(carnet);

// Actividad 4
let nombreFamilia1 = prompt("Ingrese el nombre del familiar 1");
let nombreFamilia2 = prompt("Ingrese el nombre del familiar 2");
let nombreFamilia3 = prompt("Ingrese el nombre del familiar 3");
let nombreFamilia4 = prompt("Ingrese el nombre del familiar 4");
let nombreFamilia5 = prompt("Ingrese el nombre del familiar 5");

alert(`Integrantes de la familia:\n.${nombreFamilia1}\n.${nombreFamilia2}\n.${nombreFamilia3}\n.${nombreFamilia4}\n.${nombreFamilia5}`);

// Actividad 5
let precio = parseFloat(prompt("Ingrese el precio a aplicarle un 30% de descuento."));
let total = precio * 0.3;
alert(`Total: ${total}`);