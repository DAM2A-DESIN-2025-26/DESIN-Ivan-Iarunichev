"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoFP = void 0;
const Alumno_1 = require("./Alumno");
class AlumnoFP extends Alumno_1.Alumno {
    constructor(nombre, edad, nota, ciclo, moduloFavorito) {
        super(nombre, edad, nota);
        this.ciclo = ciclo;
        this.moduloFavorito = moduloFavorito;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()} - Ciclo: ${this.ciclo} - Módulo Favorito ${this.moduloFavorito}`;
    }
    recomendarEspecialidad() {
        const cicloLower = this.ciclo.toLowerCase();
        if (cicloLower.includes("informática") || cicloLower.includes("dam") || cicloLower.includes("daw")) {
            return `Te recomiendo seguir por desarrollo de aplicaciones, especialmente en ${this.moduloFavorito}.`;
        }
        else {
            return "Quizá deberías replantearte seguir estudiando esta especialidad.";
        }
    }
}
exports.AlumnoFP = AlumnoFP;
//# sourceMappingURL=AlumnoFP.js.map