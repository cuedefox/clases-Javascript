// Nueva sintaxis para funcion (a += b) es igual a (a = a + b)
function pj(nombre, vida, fuerza) {
    this.nombre = nombre;
    this.vida = vida;
    this.fuerza = fuerza;
    this.subirVida = a => this.vida += a;
    this.bajarVida = a => this.vida -= a;
}
const rodrigo = new pj(prompt("Seleccione el nombre de su personaje"), 100, 1);
alert(`pj: ${rodrigo.nombre}\nVida: ${rodrigo.vida}\nFuerza: ${rodrigo.fuerza}`);
rodrigo.subirVida(20);
alert(`Vida: ${rodrigo.vida}`);
rodrigo.bajarVida(50);
alert(`Vida: ${rodrigo.vida}`);
