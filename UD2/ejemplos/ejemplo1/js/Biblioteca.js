"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const libro1 = {
    nombre: "El Hobbit",
    color: "Rojo",
    autor: "Tolkien",
    nPaginas: 300,
    editorial: "Minotauro",
    forrado: false,
    coverURL: "wadwadgd",
    comprar: function () {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};
const libro2 = {
    nombre: "El Quijote",
    color: "Azul",
    autor: "Cervantes",
    nPaginas: 500,
    editorial: "Planeta",
    forrado: true,
    coverURL: "gesdfesf",
    comprar: function () {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};
const libro3 = {
    nombre: "1984",
    color: "Verde",
    autor: "George Orwell",
    nPaginas: 600,
    editorial: "Planeta",
    forrado: false,
    coverURL: "adwwafaw",
    comprar: function () {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};
const libro4 = {
    nombre: "El Lazarillo de Tormes",
    color: "Gris",
    autor: "Anónimo",
    nPaginas: 100,
    editorial: "Ariel",
    forrado: true,
    coverURL: "wfadfwwaf",
    comprar: function () {
        return `Libro de aventuras del autor ${this.autor} comprado`;
    }
};
let biblioteca = [libro1, libro2, libro3];
const checkPages = (libro) => libro.nPaginas > 150;
const checkLibro = (libro, biblioteca) => biblioteca.some(b => b.nombre === libro.nombre);
console.log(checkPages(libro1));
console.log(checkPages(libro4));
console.log(checkLibro(libro2, biblioteca));
console.log(checkLibro(libro4, biblioteca));
//# sourceMappingURL=Biblioteca.js.map