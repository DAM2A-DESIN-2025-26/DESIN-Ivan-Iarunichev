"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clase = void 0;
const Alumno_1 = require("../alumno/Alumno");
class Clase {
    alumnos = [];
    addAlumno(alumno) {
        this.alumnos.push(alumno);
    }
    mostrarTodos() {
        this.alumnos.forEach(alumno => console.log(alumno.mostrarInfo()));
    }
    aprobados() {
        return this.alumnos.filter(alumno => alumno.estaAprobado());
    }
    buscarPorNombre(nombre) {
        return this.alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());
    }
    static totalAlumnos() {
        return Alumno_1.Alumno.totalAlumnos();
    }
}
exports.Clase = Clase;
//# sourceMappingURL=Clase.js.map