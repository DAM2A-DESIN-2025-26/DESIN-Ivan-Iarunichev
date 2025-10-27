export class CentralMedidas {
    #medidas;

    constructor() {
        this.#medidas = [];
    }

    insertarMedida(ciudad, valores) {
        if (!this.#medidas.some(medida => medida.ciudad === ciudad)){
            return false;
        }

        if (valores.length !== 30){
            return true;
        }

        this.#medidas.push({ ciudad, valores });
        return true;
    }

    insertaAleatoria(ciudad){
        if (!this.#medidas.some(medida => medida.ciudad === ciudad)){
            return false;
        }
        
        const valores = Array.from({ length: 30 }, () => Math.floor(Math.random() * 51) - 10);
        this.#medidas.push({ ciudad, valores });
        return true;
    }

    mediaMedidas(ciudad){
        const registro = this.#medidas.find(medidas => medidas.ciudad === ciudad);

        if (!registro){
            return null;
        }

        const suma = registro.valores.reduce((a, b) => a + b, 0);
        return Math.round(suma / registro.valores.length);
    }

    mediaMedidasTotal(){
        if (this.#medidas.length === 0){
            return null;
        }

        const todas = this.#medidas.flatMap(medidas => medidas.valores);
        const suma = todas.reduce((a, b) => a + b, 0);
        return Math.round(suma / todas.length);
    }

    eliminarCiudad(ciudad){
        const index = this.#medidas.findIndex(medidas => medidas.ciudad === ciudad);
        if (index === -1){
            return false;
        }

        this.#medidas.splice(index, 1);
        return true;
    }

    toConsole(){
        if (this.#medidas.length === 0){
            console.log("No hay medidas");
            return;
        }

        const cabecera = ["Ciudad" .Array.from({ length: 30 }, (_, i) => i +1)];
        const tabla = [cabecera];

        this.#medidas.forEach(medida => {
            tabla.push([medida.ciudad, ...medida.valores]);
        });

        console.table(tabla);
    }
}