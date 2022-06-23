/* Array Un Array es un tipo de dato que sirve para almacenar valores en forma de lista. 
Puede ser una colección de números, strings, booleanos, objetos o hasta una lista de listas. 
Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.
Los elementos del array tienen un índice, que va desde el 0 (el primer elemento del array) hasta el 
último elemento.*/
const array = ["Rodrigo", "Lucy", "Dante", "Luz"];
for (let i = 0; i < 4; i++) {
    console.log(array[i]);
}
console.log(array.length);

// .length devuelve la longitud del elemento
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];
let suma = numeros[2] + numeros[7];
console.log(suma);
for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// .push agrega un elemento al final del array
console.log(array);
console.log(array.length);
array.push("Kakariko");
console.log(array);
console.log(array.length);

// .unshift agrega un elemento al principio del array
array.unshift("Link");
console.log(array);
console.log(array.length);

// .pop elimina el ultimo elemento del array
array.pop();
console.log(array);
console.log(array.length);

// .shift elimina el primer elemento del array
array.shift();
console.log(array);
console.log(array.length);

/*El método splice() permite eliminar uno o varios elementos de un array en cualquier posición. 
Funciona con 2 parámetros: el primero es el índice donde se ubica el método para trabajar, y el segundo es 
la cantidad de elementos a eliminar desde esa posición.*/
array.push("Kaka");
array.push("Kako");
array.push("Kakar");
console.log(array);
console.log(array.length);
array.splice(4, 6);
console.log(array);
console.log(array.length);

// .join genera un string con todos los elementos del array separados por el parametro
console.log(array.join(", "));

// .concat concatena 2 elementos, arreglos
let arrays = array.concat(numeros);
console.log(arrays);

// .slice hace una copia de algunos elementos del array y los devuelve
let amantes = array.slice(0,2);
console.log(amantes);

/* El método indexOf() nos permite obtener el índice de un elemento en un array. 
Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, 
nos retorna su índice. Si el elemento no existe nos retornará como valor: -1*/
console.log(array.indexOf("Dante"));

// .includes hace saber si existe dentro de un elemento
console.log(array.includes("Rodrigo"));
console.log(array.includes("Cuede"));

// .reverse invierte el orden de un arreglo
array.reverse();
console.log(array);
array.reverse();
console.log(array);

// typeof devuelve el tipo de contenido

/*Los array pueden usarse para almacenar objetos personalizados. Podemos asignar objetos literales
 o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método
  push y el constructor.*/
const productos = [
    {id: 1, producto: "Banana"},
    {id: 2, producto: "Cigarro"},
    {id: 3, producto: "Martillo"}];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}