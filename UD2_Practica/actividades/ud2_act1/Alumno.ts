import { IAlumno } from './IAlumno';

export class Alumno implements IAlumno {
    private static contador: number = 1;

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
        return `ID: ${this.id} - ${this.nombre} (${this.edad} años) - Nota: ${this.nota}`;
    }

    estaAprobado(): boolean {
        return this.nota >= 5;
    }

    static getTotalAlumnosCreados(): number{
        return Alumno.contador - 1;
    }
}