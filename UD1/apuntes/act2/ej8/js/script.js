class Persona {
  constructor(nombre, apellido){
    this._nombre = nombre;
    this._apellido = apellido;
  }

  //getter
  get nombre(){
    return this._nombre;
  }
  get apellido(){
    return this._apellido;
  }

  //setter
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
  }
  set apellido(nuevoApellido){
    this._apellido = nuevoApellido;
  }
}

class Progenitor extends Persona{
  constructor(nombre, apellido, tieneCoche = false){
    super(nombre, apellido);
    this._tieneCoche = tieneCoche;
  }

  desplazarse(puntoA, puntoB){
    if(this._tieneCoche == false){
      return `${this._nombre} ${this._apellido} va de ${puntoA} a ${puntoB} andando`;
    } else{
      return `${this._nombre} ${this._apellido} va de ${puntoA} a ${puntoB} en coche`;
    }
  }

  comer(){
    return `Estoy comiendo huevos`;
  }
}

class Sucesor extends Persona{
  constructor(nombre, apellido, tieneMoto = false){
    super(nombre, apellido);
    this._tieneMoto = tieneMoto;
  }

  desplazarse(puntoA, puntoB){
    if(this._tieneMoto == false){
      return `${this._nombre} ${this._apellido} va de ${puntoA} a ${puntoB} andando`;
    } else{
      return `${this._nombre} ${this._apellido} va de ${puntoA} a ${puntoB} en moto`;
    }
  }
}

const p1 = new Progenitor("Daniel", "Loredo", false);
console.log(p1.desplazarse("Barcelona", "Madrid"));
console.log(p1.comer());

const p2 = new Sucesor("Luis", "Jardon", true);
console.log(p2.desplazarse("Asturias", "Logroño"));