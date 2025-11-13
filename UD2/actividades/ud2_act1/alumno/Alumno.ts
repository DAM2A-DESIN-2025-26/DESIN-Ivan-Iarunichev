import { IAlumno } from "./IAlumno";
export class Alumno implements IAlumno{
    private static contador = 1;
    readonly id: number;
    nombre: string;
    edad: number;
    nota: number;

    constructor(nombre: string, edad: number, nota: number){
        this.id = Alumno.contador++;
        this.nombre = nombre;
        this.edad = edad;
        this.nota = nota;
    }

    mostrarInfo(): string {
        return `Id: ${this.id}, Nombre: ${this.nombre}, Edad: ${this.edad}, Nota: ${this.nota}`;
    }

    estaAprobado(): boolean {
        return this.nota >= 5;
    }

    static totalAlumnos(): number{
        return Alumno.contador - 1;
    }
}