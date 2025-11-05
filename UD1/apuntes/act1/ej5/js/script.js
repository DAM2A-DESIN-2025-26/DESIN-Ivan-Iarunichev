function piedraPapelTijera(jugador1, jugador2, jugada1, jugada2){
    const opciones = ["Piedra", "Tijera", "Papel"];
    
    //Para Piedra
    if (jugada1 == 1 && jugada2 == 3){
        alert(`Gana ${jugador1} - ${opciones[0]} vence a ${opciones[2]}`);
    } else if (jugada1 == 1 && jugada2 == 2){
        alert(`Gana ${jugador2} - ${opciones[1]} vence a ${opciones[0]}`);
    } else if (jugada1 == jugada2){
        alert(`Empate entre ${jugador1} y ${jugador2} - Ambos: ${opciones[jugada1-1]}`);
    } 

    //Para Papel
    else if (jugada1 == 3 && jugada2 == 2){
        alert(`Gana ${jugador2} - ${opciones[1]} vence a ${opciones[2]}`);
    } else if (jugada1 == 3 && jugada2 == 1){
        alert(`Gana ${jugador1} - ${opciones[2]} vence a ${opciones[0]}`);
    } else if (jugada1 == jugada2){
        alert(`Empate entre ${jugador1} y ${jugador2} - Ambos: ${opciones[jugada1-1]}`);
    } 

    //Para Tijeras
    else if (jugada1 == 2 && jugada2 == 1){
        alert(`Gana ${jugador2} - ${opciones[0]} vence a ${opciones[1]}`);
    } else if (jugada1 == 2 && jugada2 == 3){
        alert(`Gana ${jugador1} - ${opciones[1]} vence a ${opciones[2]}`);
    } else if (jugada1 == jugada2){
        alert(`Empate entre ${jugador1} y ${jugador2} - Ambos: ${opciones[jugada1-1]}`);
    } 

    else {
        alert(`Mala eleccion`);
    }
}

piedraPapelTijera("Ivan", "Vladi", 1, 3);