//importamos la clase Persona
import Persona from "./persona.js";

//creamos la clase Progenitor que hereda de Persona
export default class Progenitor extends Persona{
    constructor(nombre, apellidos, tieneCoche = false){
        super(nombre, apellidos);
        this.tieneCoche = tieneCoche;
    }
    
    //metodo desplazarse
    desplazarse(puntoA, puntoB){
        return this.tieneCoche
        ? `${this.nombre} va de ${puntoA} a ${puntoB}.`
        : `${this.nombre} va de ${puntoA} a ${puntoB}.`;
    }
  
    //sobreescribimos el metodo comer
    comer(){
        return `${this.nombre}: Estoy comiendo huevos.`;
    }
}
