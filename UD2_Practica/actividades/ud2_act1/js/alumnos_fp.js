"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alumno_1 = require("./Alumno");
const AlumnoFP_1 = require("./AlumnoFP");
const Clase_1 = require("./Clase");
const claseDAM = new Clase_1.Clase();
const alumn1 = new Alumno_1.Alumno("Ivan Iarunichev", 20, 6.50);
const alumn2 = new Alumno_1.Alumno("Joel Vazquez", 19, 8);
const alumn3 = new AlumnoFP_1.AlumnoFP("Marta Carreras", 21, 7, "DAM", "Programación");
const alumn4 = new AlumnoFP_1.AlumnoFP("Paco Torrente", 20, 5.40, "DAW", "IPE II");
claseDAM.addAlumno(alumn1);
claseDAM.addAlumno(alumn2);
claseDAM.addAlumno(alumn3);
claseDAM.addAlumno(alumn4);
console.log("TODOS LOS ALUMNOS");
claseDAM.mostrarTodos().forEach(a => console.log(a.mostrarInfo()));
console.log("\nAPROBADOS");
claseDAM.aprobados().forEach(a => console.log(a.mostrarInfo()));
console.log("\nBUSCAR POR NOMBRE: 'a'");
claseDAM.buscarPorNombre("a").forEach(a => console.log(a.mostrarInfo()));
console.log("\nTOTAL DE ALUMNOS CREADOS");
console.log(Clase_1.Clase.totalAlumnos());
console.log("\nRECOMENDACIONES ESPECIALIDAD (solo FP)");
claseDAM.mostrarTodos().forEach(a => {
    if (a instanceof AlumnoFP_1.AlumnoFP) {
        console.log(`${a.nombre}: ${a.recomendarEspecialidad()}`);
    }
});
//# sourceMappingURL=alumnos_fp.js.map