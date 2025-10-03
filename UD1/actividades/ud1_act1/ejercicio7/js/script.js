let ataque = parseFloat(prompt("Introduce el valor de ataque:"));
let defensa = parseFloat(prompt("Introduce el valor de defensa:"));

let tipoAtaque = prompt("Introduce tu tipo (fuego, agua, hierba, electricidad):").toLowerCase();
let tipoDefensa = prompt("Introduce el tipo del oponente (fuego, agua, hierba, electricidad):").toLowerCase();

const efectividad = {
    fuego: { 
        hierba: 2, 
        agua: 0.5, 
        electricidad: 1,
    },
    agua: { 
        fuego: 2, 
        hierba: 0.5, 
        electricidad: 0.5,
    },
    hierba: { 
        agua: 2, 
        fuego: 0.5, 
        electricidad: 1, 
    },
    electricidad: { 
        agua: 2, 
        fuego: 1, 
        hierba: 1,
    }
};

function calculaImpacto(tipoAtaque, tipoDefensa, ataque, defensa) {
    let factor = efectividad[tipoAtaque][tipoDefensa];

    let daño = 50 * (ataque / defensa) * factor;
    return daño;
}


let daño = calculaImpacto(tipoAtaque, tipoDefensa, ataque, defensa);
alert(`El daño causado es: ${daño}`);