// Avtividad 1
let nombre = prompt("Ingresar nombre");

if (nombre == "Rodrigo") {
    alert("Fui yo");
}else {
    alert("Yo no fui");
}

// Actividad 2
let tecla = prompt("Presionar y");
if (tecla == "Y" || tecla == "y") {
    alert("correcto");
}else {
    alert("error");
}

// Actividad 3
let personaje = prompt("Selecciona un personaje:\n1.Homero\n2.Marge\n3.Bart\n4.Lisa");
if (personaje == 1) {
    alert("Elejiste a homero.");
}else if (personaje == 2) {
    alert("Elejiste a Marge.");
}else if (personaje == 3) {
    alert("Elejiste a bart.");
}else if (personaje == 4) {
    alert("Elejiste a lisa.");
}else {
    alert("No elejiste ningun personaje");
}

// Actividad 4
let presupuesto = parseFloat(prompt("Ingresar presupuesto"))
if (presupuesto >= 0 && presupuesto <= 1000) {
    alert("Presupuesto bajo.");
}else if (presupuesto >= 1001 && presupuesto <= 3000) {
    alert("Presupesto medio");
}else if (presupuesto > 3001) {
    alert("Presupuesto alto");
}else {
    alert("Error")
}

// Actividad 5
let producto1 = prompt("Esta es una lista de productos de almacen, ingrese el producto 1");
let producto2 = prompt("Ingrese el producto 2");
let producto3 = prompt("Ingrese el producto 3");
let producto4 = prompt("Ingrese el producto 4");

if (producto1 != "" && producto2 != "" && producto3 != "" && producto4 != "") {
    alert(`Lista de productos:\n1: ${producto1}\n2: ${producto2}\n3: ${producto3}\n4: ${producto4}`)
}else {
    alert("Debe ingresar todos los productos")
}
