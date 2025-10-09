//importamos la clase Persona
import Persona from "./persona.js";

//creamos la clase Sucesor que hereda de Persona
export default class Sucesor extends Persona{
    constructor(nombre, apellidos, tieneMoto = false){
        //llamamos al constructor de la clase padre
        super(nombre, apellidos);
        this.tieneMoto = tieneMoto;
    }

    //metodo desplazarse
    desplazarse(puntoA, puntoB){
        return this.tieneMoto
        ? `${this.nombre} se desplaza en moto de ${puntoA} a ${puntoB}.`
        : `${this.nombre} se desplaza andando de ${puntoA} a ${puntoB}.`;
    }
}