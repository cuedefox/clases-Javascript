//Actividad 1
const ciudades = ["Jose leon suarez", "villa villera", "villa adelina", "darude sandstorm"];
let bienvenidas = document.getElementById("act1");
for (const ciudad of ciudades) {
    let bienvenida = document.createElement("h2");
    bienvenida.innerHTML = `Bienvenido a ${ciudad}`;
    bienvenidas.append(bienvenida);
}

//Actividad 2
lista = [];
for(let i = 0; i < 5; i++) {
    let entrada = prompt("ingrese un elemento para la lista");
    lista.push(entrada);
}
console.log(lista);
let listaHt = document.createElement("ul");
for(const elemento of lista) {
    let item = document.createElement("li");
    item.innerText = elemento;
    listaHt.append(item);
}
let contenedor2 = document.getElementById("act2");
contenedor2.append(listaHt);

//Actividad 3
let act3 = document.getElementById("act3");
const paises = ["Argentina", "Chile", "Japon", "Bolivia"];
let select = document.createElement("select");
for (let index = 0; index < paises.length; index++) {
    select.innerHTML +=  `<option value='${index}'>${paises[index]}</option>`;
}
act3.append(select);

//Actividad 4
let act4 = document.getElementById("act4");
class cantante {
    constructor(id, nombre, edad, banda) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.banda = banda;
    }
}
let cantantes = [];
cantantes.push(new cantante(0, "Rodrigo", 21, "Cuede"));
cantantes.push(new cantante(1, "Alfredo", 62, "Queen"));
cantantes.push(new cantante(2, "Kurko", 27, "Nigana"));
cantantes.push(new cantante(3, "Jhon", 52, "Sarten"));
cantantes.push(new cantante(4, "a", 666, "A"));

for(const cantante of cantantes) {
    let div = document.createElement("div"); 
    div.innerHTML = `<h2>${cantante.nombre}</h2><p>Edad: ${cantante.edad} Banda: ${cantante.banda}</p><button id="${cantante.id}">Contratar :D</button>`;
    act4.appendChild(div);
}

//Actividad 5
