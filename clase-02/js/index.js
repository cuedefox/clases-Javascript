// Condiciones if else
let pruebaIf = 5;

if (pruebaIf == 5) {
    console.log("si sta bien");
}
if (pruebaIf == 6) {
    console.log("si sta bien tambien pero es 6");
}

let pruebaElse = prompt("Ingrese su nombre haber si sos tan piola");


if (pruebaElse == "") {
    alert("no pusiste nombre de usuario mamerto");
}
else {
    alert("Tu nombre es " + pruebaElse);
}
if (pruebaElse == "Cuede") {
    console.log("Sis es Cuede we");
} 
else {
    console.log("No es Cuede :(");
}

// Condiciones anidadas

let pijas = prompt("¿Cuantas pijas hay?");
// ir de menor a mayor, ya que es interpretado linea por linea
if (pijas < 10) {
    alert("Hay menos de 10 pijas :o");
}
else if (pijas < 40) {
    alert("Hay menos de 40 pijas :o");
}
else if (pijas < 70) {
    alert("Hay menos de 70 pijas :o");
}
else if (pijas < 100) {
    alert("Hay menos de 100 pijas :o");
}
else if (pijas > 100) {
    alert("Hay mas de 100 pijas :o");
}

// Variable booleana
let pruebaBoolean = prompt("Pone un numero mayor a 5");
let esMayor5 = (pruebaBoolean > 5);

if (esMayor5) {
    alert("Bien ahi");
}
else {
    alert("te dije mayor a 5 la puta que te pario");
}
