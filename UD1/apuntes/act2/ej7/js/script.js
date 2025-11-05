class Persona {
  //constructor
  constructor(nombre, apellido, platos){
    this._nombre = nombre || 'Sin nombre';
    this._apellido = apellido || 'Sin apellidos';
    this._platos = platos || 'Bocata de Chorizo';
  }

  //getters
  get nombre(){
    return this._nombre;
  }
  get apellido(){
    return this._apellido;
  }
  get platos(){
    return this._platos;
  }

  //setters
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
  }
  set apellido(nuevoApellido){
    this._apellido = nuevoApellido;
  }
  set platos(nuevosPlatos){
    this._platos = nuevosPlatos;
  }

  persona(nombre, apellido){
    return `Nombre: ${this._nombre} \nApellido: ${this._apellido}`;
  }

  comer(nombre, apellido, platos){
    return `Nombre: ${this._nombre}\nApellido: ${this._apellido}\nCome: ${this._platos}`;
  }
}

const p1 = new Persona();
console.log(p1.comer())

const p2 = new Persona("Ivan", "Iaruni");
console.log(p2.comer())