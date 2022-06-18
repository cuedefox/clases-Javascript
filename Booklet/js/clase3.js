// Actividad 1
let mensaje = prompt("Ingrese un mensaje que quiere que aparezca");
let cantidad = parseInt(prompt("¿Cuantas veces quiere que aparezca?"));
for (let i = 1; i <= cantidad; i++) {
    alert(mensaje);
}

// Actividad 2
let lados = parseInt(prompt("¿Cuantos lados tendra este cuadrado?"));
for (let i = 1; i <= lados; i++) {
    alert(`lado ${i}`)
    if (i == 4) {
        break;
    }
}

// Actividad 3
let alumnos = "Alumnos:";
for (let i = 1; i <= 10; i++) {
    alumnos = alumnos + "\n" + i + ":" + prompt(`Ingrese el alumno ${i}`);
}
alert(alumnos);

// Actividad 4
let nombres = "Nombres:";
let nombre;
while (nombre != "Voldemort") {
    nombre = prompt("Ingrese un nombre para la lista");
    nombres = nombres + "\n" + "." + nombre;
}
alert(nombres);

// Actividad 5
let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
let ingresados = '';
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}