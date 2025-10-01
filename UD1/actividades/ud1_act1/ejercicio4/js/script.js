function piedraPapelTijera(jugador1, eleccion1, jugador2, eleccion2) {
    if (eleccion1 === eleccion2) {
        alert("Empate");
    } else if (
        (eleccion1 === 'Piedra' && eleccion2 === 'Tijera') ||
        (eleccion1 === 'Papel' && eleccion2 === 'Piedra') ||
        (eleccion1 === 'Tijera' && eleccion2 === 'Papel')
    ){
        alert(`El ganador es ${jugador1} eligió ${eleccion1}`);
    } else {
        alert(`El ganador es ${jugador2} eligió ${eleccion2}`);
    }
}
piedraPapelTijera("Jugador 1", "Piedra", "Jugador 2", "Tijera");