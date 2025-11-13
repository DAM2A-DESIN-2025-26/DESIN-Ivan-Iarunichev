import { Alumno } from "../alumno/Alumno";
export declare class Clase {
    private alumnos;
    addAlumno(alumno: Alumno): void;
    mostrarTodos(): void;
    aprobados(): Alumno[];
    buscarPorNombre(nombre: string): Alumno | undefined;
    static totalAlumnos(): number;
}
//# sourceMappingURL=Clase.d.ts.map