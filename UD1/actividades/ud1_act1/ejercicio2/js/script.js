let jugador1 = "Jugador 1";
let jugador2 = "Jugador 2";

let eleccion1 = "Piedra";
let eleccion2 = "Tijera";

if (eleccion1 === eleccion2) {
    alert("Empate");
} else if (
    (eleccion1 === 'Piedra' && eleccion2 === 'Tijera') ||
    (eleccion1 === 'Papel' && eleccion2 === 'Piedra') ||
    (eleccion1 === 'Tijera' && eleccion2 === 'Papel')
) {
    alert(`El ganador es ${jugador1} elegio ${eleccion1}`);
} else {
    alert(`El ganador es ${jugador2} elegio ${eleccion2}`);
}