"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    constructor(nombre, edad, nota) {
        this.id = Alumno.contador++;
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
    mostrarInfo() {
        return `ID: ${this.id} - ${this.nombre} (${this.edad} años) - Nota: ${this.nota}`;
    }
    estaAprobado() {
        return this.nota >= 5;
    }
    static getTotalAlumnosCreados() {
        return Alumno.contador - 1;
    }
}
exports.Alumno = Alumno;
Alumno.contador = 1;
//# sourceMappingURL=Alumno.js.map