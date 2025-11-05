let jugador1 = "Ivan";
let jugador2 = "bot";

let eleccionJugador1 = "Papel";
let eleccionJugador2 = "Tijeras";

//Para Piedra
if (eleccionJugador1 == "Piedra" && eleccionJugador2 == "Papel"){
    alert(`Gana: ${jugador2}`);
} else if (eleccionJugador1 == "Piedra" && eleccionJugador2 == "Tijeras"){
    alert(`Gana: ${jugador1}`);
} else if (eleccionJugador1 == eleccionJugador2){
    alert(`Empate entre ${jugador1} y ${jugador2}`);
} 

//Para Papel
else if (eleccionJugador1 == "Papel" && eleccionJugador2 == "Tijeras"){
    alert(`Gana: ${jugador2}`);
} else if (eleccionJugador1 == "Papel" && eleccionJugador2 == "Piedra"){
    alert(`Gana: ${jugador1}`);
} else if (eleccionJugador1 == eleccionJugador2){
    alert(`Empate entre ${jugador1} y ${jugador2}`);
} 

//Para Tijeras
else if (eleccionJugador1 == "Tijeras" && eleccionJugador2 == "Piedra"){
    alert(`Gana: ${jugador2}`);
} else if (eleccionJugador1 == "Tijeras" && eleccionJugador2 == "Papel"){
    alert(`Gana: ${jugador1}`);
} else if (eleccionJugador1 == eleccionJugador2){
    alert(`Empate entre ${jugador1} y ${jugador2}`);
} 

else {
    alert(`Mala eleccion`);
}