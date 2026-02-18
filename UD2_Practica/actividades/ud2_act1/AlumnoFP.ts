import { Alumno } from "./Alumno";

export class AlumnoFP extends Alumno{
    ciclo: string;
    moduloFavorito: string;

    constructor(
        nombre: string,
        edad: number,
        nota: number,
        ciclo: string, 
        moduloFavorito: string
    ){
        super(nombre, edad, nota);
        this.ciclo = ciclo;
        this.moduloFavorito = moduloFavorito;
    }

    override mostrarInfo(): string {
        return `${super.mostrarInfo()} - Ciclo: ${this.ciclo} - Módulo Favorito ${this.moduloFavorito}`;
    }

    recomendarEspecialidad(): string {
    const cicloLower = this.ciclo.toLowerCase();

    if (cicloLower.includes("informática") || cicloLower.includes("dam") || cicloLower.includes("daw")) {
      return `Te recomiendo seguir por desarrollo de aplicaciones, especialmente en ${this.moduloFavorito}.`;
    } else {
      return "Quizá deberías replantearte seguir estudiando esta especialidad.";
    }
  }
}