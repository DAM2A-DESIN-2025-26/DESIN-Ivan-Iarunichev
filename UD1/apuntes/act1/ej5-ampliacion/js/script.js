function piedraPapelTijera(jugador1, jugador2, eleccion1, eleccion2){
    // Este objeto define a qué le gana cada opción
    const opciones = {
        Piedra: "Tijeras",    // Piedra le gana a Tijeras
        Tijeras: "Papel",     // Tijeras le gana a Papel
        Papel: "Piedra"       // Papel le gana a Piedra
    };

    // Validar que las elecciones sean válidas
    if (eleccion1 !== "Piedra" && eleccion1 !== "Papel" && eleccion1 !== "Tijeras" ||
        eleccion2 !== "Piedra" && eleccion2 !== "Papel" && eleccion2 !== "Tijeras") {
        alert("Mal Definido - Usa 'Piedra', 'Papel' o 'Tijeras'");
        return;
    }

    // Si las elecciones son iguales, es empate
    if (eleccion1 === eleccion2) {
        alert(`Empate entre ${jugador1} y ${jugador2} - Ambos eligieron ${eleccion1}`);
        return;
    }

    // Verificar quién gana
    if (opciones[eleccion1] === eleccion2) {
        alert(`Gana ${jugador1} - ${eleccion1} vence a ${eleccion2}`);
    } else {
        alert(`Gana ${jugador2} - ${eleccion2} vence a ${eleccion1}`);
    }
}

piedraPapelTijera("Ivan", "Vladi", "Papel", "Piedra");