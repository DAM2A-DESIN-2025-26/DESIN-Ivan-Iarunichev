"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clase = void 0;
const Alumno_1 = require("./Alumno");
class Clase {
    constructor() {
        this.alumnos = [];
    }
    addAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    mostrarTodos() {
        return this.alumnos;
    }
    aprobados() {
        return this.alumnos.filter(a => a.estaAprobado());
    }
    buscarPorNombre(nombre) {
        const nombreLower = nombre.toLowerCase();
        return this.alumnos.filter(a => a.nombre.toLowerCase().includes(nombreLower));
    }
    static totalAlumnos() {
        return Alumno_1.Alumno.getTotalAlumnosCreados();
    }
}
exports.Clase = Clase;
//# sourceMappingURL=Clase.js.map