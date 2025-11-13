import { Clase } from "./clase/Clase";
import { Alumno } from "./alumno/Alumno";
import { AlumnoFP } from "./alumno/AlumnoFP";

const claseFP = new Clase();

const alumno1 = new Alumno("Ana", 20, 7);
const alumno2 = new Alumno("Luis", 19, 4);
const alumnoFP1 = new AlumnoFP("María", 21, 8, "Informática", "Bases de Datos");
const alumnoFP2 = new AlumnoFP("Juan", 22, 6, "Administración", "Gestión Empresarial");

claseFP.addAlumno(alumno1);
claseFP.addAlumno(alumno2);
claseFP.addAlumno(alumnoFP1);
claseFP.addAlumno(alumnoFP2);

console.log("Todos los alumnos:");
claseFP.mostrarTodos();

console.log("Alumnos aprobados:");
claseFP.aprobados().forEach(alumno => console.log(alumno.mostrarInfo()));

console.log("Buscar alumno por nombre 'Ana':");
console.log(claseFP.buscarPorNombre("Ana")?.mostrarInfo());

console.log("Total de alumnos creados:", Clase.totalAlumnos());

console.log("Recomendación especialidad AlumnoFP:");
console.log(alumnoFP1.recomendarEspecialidad());
console.log(alumnoFP2.recomendarEspecialidad());
