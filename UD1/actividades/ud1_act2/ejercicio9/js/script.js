class Persona{
  constructor(nombre, apellidos){
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  comer(){
    return `${this.nombre} está comiendo`;
  }

  cenar(){
    return `${this.nombre} está cenando`;
  }
}

class Sucesor extends Persona{
  constructor(nombre, apellidos, tieneMoto = false) {
    super(nombre, apellidos);
    this.tieneMoto = tieneMoto;
  }

  desplazarse(puntoA, puntoB){
    if (this.tieneMoto){
      return `${this.nombre} va de ${puntoA} a ${puntoB}`;
    } else{
      return `${this.nombre} va de ${puntoA} a ${puntoB}`;
    }
  }
}

class Progenitor extends Persona{
  constructor(nombre, apellidos, tieneCoche = false){
    super(nombre, apellidos);
    this.tieneCoche = tieneCoche;
  }

  desplazarse(puntoA, puntoB){
    if (this.tieneCoche){
      return `${this.nombre} se desplaza en coche de ${puntoA} a ${puntoB}`;
    } else {
      return `${this.nombre} se desplaza andando de ${puntoA} a ${puntoB}`;
    }
  }

  comer(){
    return `${this.nombre}: Estoy comiendo huevos`;
  }
}
