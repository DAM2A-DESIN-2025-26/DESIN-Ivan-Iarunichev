let resultados = {
    PV: {
        Ayuntamiento: Math.floor(Math.random() * 5) + 6,
        Polideportivo: Math.floor(Math.random() * 5) + 6,
        Instituto: Math.floor(Math.random() * 5) + 6,
        Mercado: Math.floor(Math.random() * 5) + 6,
        Colegio: Math.floor(Math.random() * 5) + 6
    },

    OV: {
        Ayuntamiento: Math.floor(Math.random() * 5) + 6,
        Polideportivo: Math.floor(Math.random() * 5) + 6,
        Instituto: Math.floor(Math.random() * 5) + 6,
        Mercado: Math.floor(Math.random() * 5) + 6,
        Colegio: Math.floor(Math.random() * 5) + 6
    },

    VpSI: {
        Ayuntamiento: Math.floor(Math.random() * 5) + 6,
        Polideportivo: Math.floor(Math.random() * 5) + 6,
        Instituto: Math.floor(Math.random() * 5) + 6,
        Mercado: Math.floor(Math.random() * 5) + 6,
        Colegio: Math.floor(Math.random() * 5) + 6
    },

    UPV: {
        Ayuntamiento: Math.floor(Math.random() * 5) + 6,
        Polideportivo: Math.floor(Math.random() * 5) + 6,
        Instituto: Math.floor(Math.random() * 5) + 6,
        Mercado: Math.floor(Math.random() * 5) + 6,
        Colegio: Math.floor(Math.random() * 5) + 6
    }
}

for (let i = 0; i < resultados.length; i++) {
    for (let j = 0; j < resultados[i].length; j++) {
        const element = resultados[i][j]; 
        console.log(element);
    }
}
console.table(resultados);