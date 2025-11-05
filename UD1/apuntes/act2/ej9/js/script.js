class Persona{
  constructor(nombre){
    this._nombre = nombre;
  }

  get miembros(){
    return this._nombre;
  }
  set miembros(nuevoNombre){
    this._nombre = nuevoNombre;
  }

  comer(){
    return `${this.miembros} está avisado`;
  }

  desplazarse(puntoA, puntoB){
    return `${this.miembros} quiere ir de ${puntoA} a ${puntoB}`;
  }
}

class Familia {
  constructor(domicilio, renta, miembros){ // miembros: Array<Persona>
    this._domicilio = domicilio;
    this._renta = renta;
    this._miembros = miembros;
  }

  llamadaAComer(){
    for (const persona of this._miembros) {
      console.log(persona.comer());
    }
  }

  vacaciones(puntoA, puntoB){
    const resultados = [];
    for (const persona of this._miembros) {        // también podría ser this._miembros.forEach(...)
      resultados.push(persona.desplazarse(puntoA, puntoB));
    }
    return resultados.join("\n");                  // opcional: devuelve todo junto
  }
}

// Crear personas
const p1 = new Persona("Papa");
const p2 = new Persona("Mama");
const p3 = new Persona("Ivan");
const p4 = new Persona("Vladi");

// Crear familia con array de personas
const f1 = new Familia("Calle", "Renta", [p1,p2,p3,p4]);
f1.llamadaAComer();
console.log(f1.vacaciones("Oviedo", "Gijón"));