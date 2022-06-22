// Los objetos tienen varios valores
const dios = {nombre: "Rodrigo", edad: 20, sexo: "Masculino"};
console.log(dios);
alert(dios.sexo);
alert(dios.nombre);
alert(dios["edad"]);
dios["nombre"] = "Cuede";
dios.sexo = "Si";
alert(dios.sexo);
alert(dios.nombre);

// Constructor es una funcion que se usa para crear un nuevo objeto cada vez que sea necesario, se inicia con new
/*La palabra clave this (“este”) refiere al elemento actual en el que se está escribiendo el código.  
Cuando se emplea un función constructora para crear un objeto (con la palabra clave new), this está enlazado
 al nuevo objeto instanciado. This es muy útil para asegurar que se emplean las propiedades del objeto actual.*/
function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const robertita = new Persona("Robertita", 18, "Siempre calle");
const carlos = new Persona("Carlos", 804, "a");
console.log(robertita);
alert(`Ella se llama ${robertita.nombre} y tiene ${robertita.edad} años`);
alert(carlos.calle);

/*Como vimos anteriormente, las funciones en JS se pueden definir en cualquier parte del código, y pueden ser
 llamadas desde cualquier otra parte del código posterior.
Los métodos de los objetos también son técnicamente funciones, sólo que se limitan a poder ser ejecutados
 solo desde el mismo objeto.*/

//  Hay metodos en los objetos css
let caca = "Caca";
console.log(caca.length);
console.log(caca.toLowerCase());
console.log(caca.toUpperCase());

// metodos personalizados
function Humano(nombre, edad, sexo) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.presentarse = function() {alert(`Hola soy ${this.nombre}, soy ${this.sexo} y tengo ${this.edad} años.`)};
}
const panadero = new Humano("Jose", 43, "Hombre");
const puta = new Humano("Carla", 23, "Mujer");
panadero.presentarse();
puta.presentarse();

// in busca una propiedad en un objeto
console.log("nombre" in panadero);
console.log("puta" in puta);

// for in recorre cada atributo del objeto asignandole un nombre
for (const propiedad in puta) {
    console.log(puta[propiedad]);
}

// Clases, son como funciones constructoras pero con una sintaxis mas clara y comoda.
class Miembro{
    constructor(nombre, edad, raza) {
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
    }
    presentarse() {
        alert(`Hola, soy ${this.nombre} y soy ${this.raza}, tengo ${this.edad} añosAAAAAAAAAA.`)
    }
}
const miembro1 = new Miembro("Mirta", 124, "Dinosaurio");
for (const datos in miembro1) {
    console.log(`${datos}: ${miembro1[datos]}`);
}
miembro1.presentarse();

/*-Los objetos tienen propiedades y métodos.
-El método constructor de un objeto sirve para crear el mismo y asignarle sus propiedades.
Permite crear varios objetos usando el mismo constructor.
-Las funciones de JS son generalmente de acceso global y los métodos son únicamente utilizados para ser 
invocados por los objetos que lo contienen.
-Las clases son otra forma de crear objetos personalizados en JS.*/
