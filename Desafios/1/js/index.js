let tiempoBomba = parseInt(prompt("Ingresa los segundos antes de que explote la bomba\n(No vale poner 0 porque ya habrias explotado si no :O)"));
for(let i = tiempoBomba; i >=1; i--) {
    alert(`La bomba explotara en ${i} segundos...`);
    if(i == 1) {
        alert("BOOOOOM");
    }
}