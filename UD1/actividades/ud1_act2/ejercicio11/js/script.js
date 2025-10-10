//definición de los libros
const libro1 = {
    nombre: "Spider-Man: Homecoming",
    color: "Rojo",
    autor: "Stan Lee",
    nPaginas: 120,
    editorial: "Marvel Comics",
    forrado: true,
    coverURL: "https://paginaweb.com",
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    }
};

const libro2 = {
    nombre: "Iron Man: Extremis",
    color: "Dorado",
    autor: "Warren Ellis",
    nPaginas: 160,
    editorial: "Marvel Comics",
    forrado: false,
    coverURL: "https://paginaweb.com",
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    }
};

const libro3 = {
    nombre: "Captain America: Winter Soldier",
    color: "Azul",
    autor: "Ed Brubaker",
    nPaginas: 200,
    editorial: "Marvel Comics",
    forrado: true,
    coverURL: "https://paginaweb.com",
    comprar: function(){
        console.log(`Libro de aventuras del autor ${this.autor} comprado`);
    }
};

//biblioteca con tres libros
const bibliotecaLibros = [libro1, libro2, libro3];

//función flecha con desestructuración
const checkPages = ({ nPaginas }) => nPaginas > 150;

//función flecha para comprobar si un libro está en la biblioteca
const checkLibro = (biblioteca, libro) => biblioteca.some(b => b.nombre === libro.nombre);