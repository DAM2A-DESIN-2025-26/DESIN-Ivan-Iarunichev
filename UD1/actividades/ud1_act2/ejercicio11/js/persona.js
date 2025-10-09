export default class Persona{
    constructor(nombre, apellidos){
        this.nombre = nombre;
        this.apellidos = apellidos;
    }

    //metodo comer
    comer(){
        return `${this.nombre} está comiendo.`;
    }

    //metodo cenar
    cenar(){
        return `${this.nombre} está cenando.`;
    }
}