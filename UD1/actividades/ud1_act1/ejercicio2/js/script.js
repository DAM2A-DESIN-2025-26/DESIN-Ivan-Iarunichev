var jugador1 = prompt("Introduce el nombre del jugador 1: ");
var jugador2 = prompt("Introduce el nombre del jugador 2: ");

var movimientos = ["piedra" || "Piedra", "papel" || "Papel", "tijeras" || "Tijeras"];

var eleccion1 = prompt(jugador1 + ", elige entre piedra, papel o tijeras: ");
var eleccion2 = prompt(jugador2 + ", elige entre piedra, papel o tijeras: ");

// si jugador 1 elige piedra
if (eleccion1 === "piedra" || eleccion1 === "Piedra") {
    if (eleccion2 === "piedra" || eleccion2 === "Piedra") {
        alert("Empate");
    } else if (eleccion2 === "papel" || eleccion2 === "Papel") {
        alert("el ganador es " + jugador2);
    } else if (eleccion2 === "tijeras" || eleccion2 === "Tijeras") {
        alert("el ganador es " + jugador1);
    }

// si jugador 1 elige papel
} else if (eleccion1 === "papel" || eleccion1 === "Papel") {
    if (eleccion2 === "piedra" || eleccion2 === "Piedra") {
        alert("el ganador es " + jugador1);
    } else if (eleccion2 === "papel" || eleccion2 === "Papel") {
        alert("Empate");
    } else if (eleccion2 === "tijeras" || eleccion2 === "Tijeras") {
        alert("el ganador es " + jugador2);
    }

    // si jugador 1 elige tijeras
} else if (eleccion1 === "tijeras" || eleccion1 === "Tijeras") {
    if (eleccion2 === "piedra" || eleccion2 === "Piedra") {
        alert("el ganador es " + jugador2);
    } else if (eleccion2 === "papel" || eleccion2 === "Papel") {
        alert("el ganador es " + jugador1);
    } else if (eleccion2 === "tijeras" || eleccion2 === "Tijeras") {
        alert("Empate");
    }
}
else {
    alert("Elección no válida");
}