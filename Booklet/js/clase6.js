// Actividad 1
const familia = ["Charly", "Milly", "Rodri", "Luna", "Valen"];
for (i = 0; i < familia.length; i++) {
    console.log(`${familia[i]} es el integrante numero ${i + 1}`);
}

// Actividad 2
const miembros = [];
let entrada = prompt("Ingrese el nombre de un jugador");
while (entrada != "ESC") {
    miembros.push(entrada);
    entrada = prompt("Ingrese el nombre de un jugador");
}
for (i = 0; i < miembros.length; i++) {
    alert(`El miembro numero ${i + 1} es ${miembros[i]}`);
}

// Actividad 3
class jugador {
    constructor(nombre, numero, edad, lesion) {
        this.nombre = nombre;
        this.numero = numero;
        this.edad = edad;
        this.lesion = lesion;
    }
}
const jugadores = [];
jugadores.push(new jugador("RODRIGO", 10, 20, true));
jugadores.push(new jugador("Lautaro", 20, 21, false));
jugadores.push(new jugador("Matias", 4, 19, true));
jugadores.push(new jugador("Sebastian", 1, 21, false));
jugadores.push(new jugador("Julian", 7, 22, false));

console.log(jugadores);

// Actividad 4
function buscarJugador(equipo, jugador) {
    return equipo.find(objeto => objeto.nombre === jugador.toUpperCase());
}
for (let i = 0; i < 3; i++) {
    let busqueda = buscarJugador(jugadores, prompt("Ingresar nombre de jugador"));
    if (busqueda != undefined) {
        alert('JUGADOR '+busqueda.nombre+' CAMISETA '+busqueda.camiseta+' EDAD '+busqueda.edad);
    }else{
        alert('NO EXISTE JUGADOR CON ESE NOMBRE');
    }
}

// Actividad 5
function filtroJugadores(equipo, edad) {
    return equipo.filter(objeto => objeto.edad == parseInt(edad));
}
function listaJugadores(jugadores) {
    let lista = '';
    for (const jugador of jugadores) {
        lista += 'JUGADOR ' + jugador.nombre + ' CAMISETA ' + jugador.camiseta + ' EDAD ' + jugador.edad + '\n'
    }
    return lista;
}
for (let index = 0; index < 5; index++) {
    let filtro = filtroJugadores(jugadores, prompt('INGRESAR NOMBRE DE JUGADOR'));
    if (filtro.length > 0) {
        alert(listaJugadores(filtro));
    } else {
        alert('NO EXISTE JUGADORES CON ESA EDAD');
    }
}