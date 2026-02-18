import { Alumno } from "./Alumno";

export class Clase {
    private alumnos: Alumno[] = [];

    addAlumno(alumno: Alumno): void{
        this.alumnos.push(alumno);
    } 

    mostrarTodos(): Alumno[]{
        return this.alumnos;
    }

    aprobados(): Alumno[]{
        return this.alumnos.filter(a => a.estaAprobado());
    }

    buscarPorNombre(nombre: string): Alumno[]{
        const nombreLower = nombre.toLowerCase();
        return this.alumnos.filter(a => a.nombre.toLowerCase().includes(nombreLower));
    }

    static totalAlumnos(): number{
        return Alumno.getTotalAlumnosCreados();
    }
}