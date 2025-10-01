function piedraPapelTijera() {
    let jugador1 = prompt("Introduce el nombre del jugador 1:");
    let jugador2 = prompt("Introduce el nombre del jugador 2:");

    let jugadas = {
        Tijera: "Tijera",
        Piedra: "Piedra",
        Papel: "Papel"
    }
    
    let eleccion1 = prompt(`${jugador1}, elige entre ${jugadas.Piedra}, ${jugadas.Papel} o ${jugadas.Tijera}: `);
    let eleccion2 = prompt(`${jugador2}, elige entre ${jugadas.Piedra}, ${jugadas.Papel} o ${jugadas.Tijera}: `);

    if (eleccion1 === eleccion2) {
        alert("Empate");
        return;
    } 
    if ((eleccion1 === jugadas.Piedra && eleccion2 === jugadas.Tijera) ||
        (eleccion1 === jugadas.Papel && eleccion2 === jugadas.Piedra) ||
        (eleccion1 === jugadas.Tijera && eleccion2 === jugadasPapel)) {
        alert(`El ganador es ${jugador1} elegio ${eleccion1}`);
    } else {
        alert(`El ganador es ${jugador2} elegio ${eleccion2}`);
    }
}
piedraPapelTijera();