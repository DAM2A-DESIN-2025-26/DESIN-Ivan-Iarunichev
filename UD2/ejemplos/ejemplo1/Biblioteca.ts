import type { Libro } from "./types/Libro";

const libro1: Libro = {
    nombre: "El Hobbit",
    color: "Rojo",
    autor: "Tolkien",
    nPaginas: 300,
    editorial: "Minotauro",
    forrado: false,
    coverURL: "wadwadgd",
    comprar: function(): string {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};

const libro2: Libro = {
    nombre: "El Quijote",
    color: "Azul",
    autor: "Cervantes",
    nPaginas: 500,
    editorial: "Planeta",
    forrado: true,
    coverURL: "gesdfesf",
    comprar: function(): string {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};

const libro3: Libro = {
    nombre: "1984",
    color: "Verde",
    autor: "George Orwell",
    nPaginas: 600,
    editorial: "Planeta",
    forrado: false,
    coverURL: "adwwafaw",
    comprar: function(): string {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};

const libro4: Libro = {
    nombre: "El Lazarillo de Tormes",
    color: "Gris",
    autor: "Anónimo",
    nPaginas: 100,
    editorial: "Ariel",
    forrado: true,
    coverURL: "wfadfwwaf",
    comprar: function(): string {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};

let biblioteca = [libro1, libro2, libro3];

const checkPages = (libro: Libro) => libro.nPaginas > 150;

const checkLibro = (libro: Libro, biblioteca: Libro[]) => biblioteca.some(b => b.nombre === libro.nombre);

console.log(checkPages(libro1));
console.log(checkPages(libro4));

console.log(checkLibro(libro2, biblioteca));
console.log(checkLibro(libro4, biblioteca));