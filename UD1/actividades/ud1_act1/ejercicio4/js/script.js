function piedraPapelTijera() {
    const opciones = ['Piedra' || 'piedra', 'Papel' || 'papel', 'Tijera' || ' tijera'];
    let jugador1 = prompt("Introduce el nombre del jugador 1:");
    let jugador2 = prompt("Introduce el nombre del jugador 2:");

    let eleccion1 = prompt(`${jugador1}, elige entre Piedra, Papel o Tijera:`);
    let eleccion2 = prompt(`${jugador2}, elige entre Piedra, Papel o Tijera:`);

    if (eleccion1 == eleccion2) {
        alert("Empate");
        return;
    } 
    if ((eleccion1 == 'Piedra' && eleccion2 == 'Tijera') ||
        (eleccion1 == 'Papel' && eleccion2 == 'Piedra') ||
        (eleccion1 == 'Tijera' && eleccion2 == 'Papel')) {
        alert(`El ganador es ${jugador1}`);
    } else {
        alert(`El ganador es ${jugador2}`);
    }
}
piedraPapelTijera();