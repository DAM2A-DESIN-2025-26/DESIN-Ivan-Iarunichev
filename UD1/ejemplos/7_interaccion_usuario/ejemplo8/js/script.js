let jugador = {
    nombre: "Godzilla",
    vida: 100,
    nivel: 3,
    tiempo: "1:00",
    trucos: false
}

var jugadorJSON = JSON.stringify(jugador);
console.log(jugadorJSON);