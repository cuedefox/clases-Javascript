// Actividad 1
let act1 = document.getElementById("act1");
let btn = document.createElement("button");
btn.id = "btnNucleo";
btn.innerText = "Boton"
act1.appendChild(btn);
btn.onclick = ()=> {
    let h2 = document.createElement("h2");
    h2.innerText = "Hola :D";
    act1.appendChild(h2);
};

// Actividad 2
let act2 = document.getElementById("act2");
let asignaturas = ["HTML", "CSS", "JS", "REACT", "BACK"];
let select = document.createElement("select");
for(let i = 0; i < asignaturas.length; i++) {
    select.innerHTML += `<option value="${i}">${asignaturas[i]}</option>`;
}
select.onchange = ()=> {
    let h2 = document.createElement("h2");
    h2.innerText = `${asignaturas[select.value]}`;
    act2.appendChild(h2);
}
act2.appendChild(select);

// Actividad 3
let act3 = document.getElementById("act3");
const estudiantes = []
class Estudiante {
    constructor(literal) {
        this.id = estudiantes.length;
        this.nombre = literal.nombre;
        this.edad = literal.edad;
        this.curso = literal.curso;
     }
}
const formulario = document.createElement("form");
formulario.innerHTML = `<input type="text">
                        <input type="number">
                        <input type="text">
                        <input type="submit">`;
formulario.onsubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.children;
    estudiantes.push(new Estudiante({ nombre: inputs[0].value, edad: inputs[1].value, curso: inputs[2].value }));
    mostrarEstudiantes(estudiantes);
    const btnSuspender = document.getElementsByClassName('btnSuspender');
    for (const boton of btnSuspender) {
        boton.onclick = (e) => {
            const seleccionado = estudiantes.find(obj => obj.id == e.target.id);
            seleccionado.suspender();
            console.log(seleccionado);
            let notificacion = document.createElement("h6");
            notificacion.innerHTML = `Nombre ${seleccionado.nombre} -  SUSPENDIDO`;
            salida.prepend(notificacion);
        }
    }
}

function mostrarEstudiantes(estudiantes) {
    salida.innerHTML = '';
    for (const estudiante of estudiantes) {
        let divEstudiante = document.createElement("div");
        divEstudiante.innerHTML = `<h2>${estudiante.nombre}</h2>
                                   <p>${estudiante.edad} / ${estudiante.curso} </p>
                                   <button id='${estudiante.id}' class='btnEstudiante'>Seleccionar</button>
                                   <button id='${estudiante.id}' class='btnSuspender'>Suspender</button>`
        salida.appendChild(divEstudiante);
    }
}
const salida = document.createElement("div");
act3.appendChild(formulario);
act3.appendChild(salida);
