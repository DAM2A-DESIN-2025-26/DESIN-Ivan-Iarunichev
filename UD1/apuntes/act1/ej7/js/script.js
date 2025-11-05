function calculaImpacto(tuTipo, oponenteTipo, ataque, defensa){
    const efectividad = {
        fuego: {
            hierba: 2,
            agua: 0.5,
            electricidad: 1,
            fuego: 1
        },
        hierba: {
            fuego: 0.5,
            agua: 2,
            electricidad: 1,
            hierba: 1
        },
        agua: {
            fuego: 2,
            electricidad: 0.5,
            hierba: 0.5,
            agua: 1
        },
        electricidad: {
            agua: 2,
            fuego: 1,
            hierba: 1,
            electricidad: 1
        }
    };

    let multiplicador = efectividad[tuTipo][oponenteTipo];
    let danio = Math.round(50 * (ataque / defensa) * multiplicador);
    alert("Causaste: " + danio + " puntos de daño.");
}

calculaImpacto("hierba", "agua", 70, 130);