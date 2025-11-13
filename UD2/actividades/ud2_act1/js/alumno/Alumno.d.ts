import { IAlumno } from "./IAlumno";
export declare class Alumno implements IAlumno {
    private static contador;
    readonly id: number;
    nombre: string;
    edad: number;
    nota: number;
    constructor(nombre: string, edad: number, nota: number);
    mostrarInfo(): string;
    estaAprobado(): boolean;
    static totalAlumnos(): number;
}
//# sourceMappingURL=Alumno.d.ts.map