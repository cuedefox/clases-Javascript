// Actividad 1
class Tienda{
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
    estaAbierto(hora) {
        if(((hora >= 8) && (hora <= 12)) || ((hora >= 15) && (hora <= 19))) {
            return true;
        }else {
            return false;
        }
    }
    esPropietario(nombre) {
        return this.propietario == nombre;
    }
}
const tienda1 = new Tienda("Lo de zulma", "Cacarico 789", "Zulma", "kiosko");
const tienda2 = new Tienda("Carrifu", "satarretea 456", "lefu", "Supermercado");
const tienda3 = new Tienda("MaxiTaxi", "pasillo 31", "Oscar", "Hypermercado");
console.log(tienda1);
console.log(tienda2);
console.log(tienda3);

// Actividad 2
let ingresados = ``;
for(let i = 1; i < 6; i++) {
    let tienda = new Tienda(prompt("Nombre"), prompt("Direccion"), prompt("Propietario"), prompt("Rubro"));
    ingresados += `tienda ${i}:\nNombre: ${tienda.nombre}.\nDireccion: ${tienda.direccion}.\nPropietario: ${tienda.propietario}.\nRubro: ${tienda.rubro}.\n`
}
alert(ingresados);

// Actividad 3
for(let i = 0; i < 3; i++) {
    let entrada = prompt(`Ingresa la hora para ver si ${tienda1.nombre} esta abierto`);
    if (tienda1.estaAbierto(entrada)) {
        alert("Sis esta abiertu a las " + entrada);
    }else {
        alert("Pos no we a las " + entrada + " no");
    }
}

// Actividad 4
for (let i = 0; i < 5; i++) {
    let entrada = prompt("Ingrese nombre para ver si es propietario de alguna tienda");
    if (tienda1.esPropietario(entrada)) {
        alert(`SIs es propietario de ${tienda1.nombre}`);
    }else if (tienda2.esPropietario(entrada)) {
        alert(`SIs es propietario de ${tienda2.nombre}`);
    }else if (tienda3.esPropietario(entrada)) {
        alert(`SIs es propietario de ${tienda3.nombre}`);
    }else {
        alert("Pos no, no es prpietario de nada");
    }
}

// Actividad 5
class Cliente{
    constructor(nombre,presupuesto,tarjeta,telefono){
        this.nombre = nombre;
        this.presupuesto = parseFloat(presupuesto);
        this.tarjeta = tarjeta;
        this.telefono = telefono;
    }

    transferirDinero(valor){
        if((this.presupuesto > 0)&&(valor < this.presupuesto)){
            this.presupuesto -= valor;
            console.log(this.presupuesto);
            return valor
        }else{
            return 0;
        }
    }
}
const cliente1 = new Cliente("Homero", 2000, true, "1234560");
const cliente2 = new Cliente("Carlos", "1000", false, "21234560");
const cliente3 = new Cliente("Barny", "50", false, "231234560");
for (let index = 0; index < 5; index++) {
    let entrada = parseFloat(prompt("INGRESAR MONTO"));
    if (cliente1.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente1.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente2.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente2.nombre+ " TE PUEDE PAGAR "+entrada);
    }
    if (cliente3.transferirDinero(entrada)){
        alert("EL CLIENTE " + cliente3.nombre+ " TE PUEDE PAGAR "+entrada);
    }
}