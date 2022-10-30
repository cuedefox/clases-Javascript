function obtenerComentarios() {
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
}

obtenerComentarios();