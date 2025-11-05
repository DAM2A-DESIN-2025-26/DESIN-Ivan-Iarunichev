class Edificio{
    #calle;
    #numero;
    #codigoPostal;
    #plantas;

    constructor(calle = "Sin calle", numero = 0, codigoPostal = 0){
        this.#calle = calle;
        this.#numero = numero;
        this.#codigoPostal = codigoPostal;
        this.#plantas = [];

        console.log(`Construido nuevo edificio en 
            calle: ${this.#calle}, 
            numero: ${this.#numero}, 
            CP: ${this.#codigoPostal}`);
    }

    //getters / setters
    get calle(){
        return this.#calle;
    }
    set calle(valor){
        this.#calle = valor;
    }

    get numero(){
        return this.#numero;
    }
    set numero(valor){
        this.#numero = valor;
    }

    get codigoPostal(){
        return this.#codigoPostal;
    }
    set codigoPostal(valor){
        this.#codigoPostal = valor;
    }

    agregaPlantasYPuertas(nPlantas, nPuertas){
        for (let i = 0; i < nPlantas; i++) {
            let planta = [];
            for (let j = 0; j < nPuertas; j++) {
                planta.push("");
            }
            this.#plantas.push(planta);
        }
    }

    agragaPropietario(nombre, planta, puerta){
        if(planta < 0 || planta >= this.#plantas.length){
            console.log("La planta no existe");
            return;
        }

        if (puerta < 0 || puerta >= this.#plantas[planta].length) {
            console.log("La puerta no existe");
            return;
        }

        this.#plantas[planta][puerta] = nombre;
        console.log(`El propietario es: ${nombre},
                    Planta: ${planta} y Puerta: ${puerta}`);
    }

    imprimePlantas(){
        for (let i = 0; i < this.#plantas.length; i++) {
            console.log(`Planta ${i}`);
            for (let j = 0; j < this.#plantas[i].length; j++) {
                let propietario = this.#plantas[i][j];
                console.log(`  Puerta ${j}: ${propietario ? propietario : "(sin propietario)"}`);
            }
        }
    }
}