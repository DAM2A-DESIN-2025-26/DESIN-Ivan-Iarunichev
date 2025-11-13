import { Alumno } from "../alumno/Alumno";

export class Clase {
    private alumnos: Alumno[] = [];

    addAlumno(alumno: Alumno) {
        this.alumnos.push(alumno);
    }

    mostrarTodos(): void {
        this.alumnos.forEach(alumno => console.log(alumno.mostrarInfo()));
    }

    aprobados(): Alumno[] {
        return this.alumnos.filter(alumno => alumno.estaAprobado());
    }

    buscarPorNombre(nombre: string): Alumno | undefined {
        return this.alumnos.find(alumno => alumno.nombre.toLowerCase() === nombre.toLowerCase());
    }

    static totalAlumnos(): number {
        return Alumno.totalAlumnos();
    }
}