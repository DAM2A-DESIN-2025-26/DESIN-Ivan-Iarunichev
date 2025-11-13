"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoFP = void 0;
const Alumno_1 = require("./Alumno");
class AlumnoFP extends Alumno_1.Alumno {
    ciclo;
    moduloFavorito;
    constructor(nombre, edad, nota, ciclo, moduloFavorito) {
        super(nombre, edad, nota);
        this.ciclo = ciclo;
        this.moduloFavorito = moduloFavorito;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()}, Ciclo: ${this.ciclo}, Módulo favorito: ${this.moduloFavorito}`;
    }
    recomendarEspecialidad() {
        if (this.ciclo.toLowerCase().includes('informática')) {
            return 'Recomendado la especialidad de DAM.';
        }
        return 'Quizás deberías considerar dejar de estudiar FP sino te gusta';
    }
}
exports.AlumnoFP = AlumnoFP;
//# sourceMappingURL=AlumnoFP.js.map