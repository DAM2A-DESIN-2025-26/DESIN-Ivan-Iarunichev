export class Persona {
    //Constructor
    constructor(nombre, apellidos)  {
        this._nombre = nombre;
        this._apellidos = apellidos;
    }

    // Getter y Setter para nombre
    get nombre() { 
        return this._nombre; 
    }
    
    set nombre(nuevoNombre) { 
        this._nombre = nuevoNombre; 
    }

    // Getter y Setter para apellidos
    get apellidos() { 
        return this._apellidos; 
    }

    set apellidos(nuevosApellidos) { 
        this._apellidos = nuevosApellidos; 
    }

    // Método para mostrar información
    mostrarInfo() { return `${this._nombre} ${this._apellidos}`; }
}