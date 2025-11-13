"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
class Alumno {
    static contador = 1;
    id;
    nombre;
    edad;
    nota;
    constructor(nombre, edad, nota) {
        this.id = Alumno.contador++;
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }
    mostrarInfo() {
        return `Id: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Nota: ${this.nota}`;
    }
    estaAprobado() {
        return this.nota >= 5;
    }
    static totalAlumnos() {
        return Alumno.contador - 1;
    }
}
exports.Alumno = Alumno;
//# sourceMappingURL=Alumno.js.map