export interface IAlumno {
    id: number;
    nombre: string;
    edad: number;
    nota: number;

    mostrarInfo(): string;
    estaAprobado(): boolean;
}