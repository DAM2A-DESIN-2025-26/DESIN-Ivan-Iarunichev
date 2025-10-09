//importamos la clase Persona
export default class Familia{
    //constructor
    constructor(domicilio, renta){
        this.domicilio = domicilio;
        this.renta = renta;
        this.miembros = [];
    }

    //metodo agregarMiembro
    agregarMiembro(persona){
        this.miembros.push(persona);
    }

    //metodo llamadaAComer
    llamadaAComer(){
        console.log("Llamada a comer:");
        this.miembros.forEach(miembro => {
            console.log(miembro.comer());
        });
    }

    //metodo vacaciones
    vacaciones(puntoA, puntoB){
        console.log("Vacaciones:");
        this.miembros.forEach(miembro => {
            if (typeof miembro.desplazarse === "function"){
                console.log(miembro.desplazarse(puntoA, puntoB));
            } else{
                console.log(`${miembro.nombre} no puede desplazarse.`);
            }
        });
    }
}
