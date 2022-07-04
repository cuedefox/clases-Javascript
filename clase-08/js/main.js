console.dir(document);
console.dir(document.head);
console.dir(document.body);

let titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

let seccion = document.getElementById("seccion1");
console.log(seccion.innerHTML);

let producto = document.getElementsByClassName("producto");
console.log(producto[0].innerHTML);
console.log(producto[2].innerHTML);
console.log(producto[3].innerHTML);
console.log(producto);
console.log(producto[1]);