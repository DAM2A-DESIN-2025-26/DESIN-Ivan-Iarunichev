class CentralMedidas {
    constructor() {
        this.medidas = [];
    }

    // Añadir medidas manualmente
    insertaMedidas(ciudad, valores) {
        ciudad = ciudad.toUpperCase();
        if (this.existeCiudad(ciudad) || valores.length !== 30)
            return false;
        for (let i = 0; i < valores.length; i++) {
            if (isNaN(valores[i]) || valores[i] < -10 || valores[i] > 40)
                return false;
        }
        let fila = [ciudad];
        for (let i = 0; i < valores.length; i++) {
            fila.push(parseInt(valores[i]));
        }
        this.medidas.push(fila);
        return true;
    }

    // Añadir medidas aleatorias
    insertaAleatorio(ciudad) {
        ciudad = ciudad.toUpperCase();
        if (this.existeCiudad(ciudad))
            return false;
        let fila = [ciudad];
        for (let i = 0; i < 30; i++) {
            // Temperatura aleatoria -10 a 40
            fila.push(Math.floor(Math.random() * 51) - 10);
        }
        this.medidas.push(fila);
        return true;
    }

    // Comprueba si existe la ciudad
    existeCiudad(ciudad) {
        for (let i = 0; i < this.medidas.length; i++) {
            if (this.medidas[i][0] === ciudad)
                return true;
        }
        return false;
    }

    // Media de una ciudad
    mediaMedidas(ciudad) {
        ciudad = ciudad.toUpperCase();
        for (let i = 0; i < this.medidas.length; i++) {
            if (this.medidas[i][0] === ciudad) {
                let suma = 0;
                for (let j = 1; j <= 30; j++)
                    suma += this.medidas[i][j];
                return Math.round(suma / 30);
            }
        }
        return null;
    }

    // Media total de todas las ciudades
    mediaMedidasTotal() {
        if (this.medidas.length === 0)
            return null;
        let suma = 0;
        let total = 0;
        for (let i = 0; i < this.medidas.length; i++) {
            for (let j = 1; j <= 30; j++) {
                suma += this.medidas[i][j];
                total++;
            }
        }
        return Math.round(suma / total);
    }

    // Borra una ciudad
    eliminaCiudad(ciudad) {
        ciudad = ciudad.toUpperCase();
        for (let i = 0; i < this.medidas.length; i++) {
            if (this.medidas[i][0] === ciudad) {
                this.medidas.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    // Genera tabla HTML
    toHTML() {
        if (this.medidas.length === 0)
            return "<p>No hay datos.</p>";
        let html = "<table><tr><th>Ciudad</th>";
        for (let i = 1; i <= 30; i++)
            html += `<th>Día ${i}</th>`;
        html += "<th>Media</th></tr>";

        for (let i = 0; i < this.medidas.length; i++) {
            let fila = this.medidas[i];
            let suma = 0;
            html += `<tr><td>${fila[0]}</td>`;
            for (let j = 1; j <= 30; j++) {
                html += `<td>${fila[j]}</td>`;
                suma += fila[j];
            }
            html += `<td>${Math.round(suma/30)}</td></tr>`;
        }
        html += "</table>";
        return html;
    }

    // Guarda datos en JSON
    toJSON() {
        return JSON.stringify(this.medidas);
    }

    // Carga datos del JSON
    fromJSON(json) {
        this.medidas = JSON.parse(json);
    }
}
