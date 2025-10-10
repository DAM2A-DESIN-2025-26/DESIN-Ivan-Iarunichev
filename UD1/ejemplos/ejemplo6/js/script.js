class Animal{
    nombre;

    hablar(){
        console.log(`${this.nombre} + ' hace un ruido'`)
    }

    set Nombre(nombre){
        this.nombre = nombre;
    }
}

class Perro extends Animal{
    hablar(){
        super.hablar();
        console.log(`${this.nombre} + ' ladra'`);
    }
}

var tomate = "tomate3333";
var perro = new Perro();
perro.nombre = "coco";

console.log(perro.hablar());