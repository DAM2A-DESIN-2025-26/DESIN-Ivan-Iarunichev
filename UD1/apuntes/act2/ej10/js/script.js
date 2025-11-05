const libros = {
  libro1: {
    nombre: "Primer Libro",
    color: "rojo",
    autor: "Laura Gómez",
    nPaginas: 250,
    editorial: "Editorial Sol",
    forrado: true,
    coverURL: "https://example.com/primer-libro.jpg"
  },
  libro2: {
    nombre: "Segundo Libro",
    color: "azul",
    autor: "Carlos Ruiz",
    nPaginas: 320,
    editorial: "Letras Vivas",
    forrado: false,
    coverURL: "https://example.com/segundo-libro.jpg"
  },
  libro3: {
    nombre: "Tercer Libro",
    color: "verde",
    autor: "María López",
    nPaginas: 190,
    editorial: "Montaña Ediciones",
    forrado: true,
    coverURL: "https://example.com/tercer-libro.jpg"
  },
  libro4: {
    nombre: "Tercer Libro",
    color: "verde",
    autor: "María López",
    nPaginas: 190,
    editorial: "Montaña Ediciones",
    forrado: true,
    coverURL: "https://example.com/tercer-libro.jpg"
  }
}
function comprar(libro){
  return `Libro de aventuras del autor ${libro.autor} comprado`;
}

const biblioteca = [libros.libro1, libros.libro2, libros.libro3];

const checkPages = ({ nPaginas }) => nPaginas > 150;
const checkLibro = ({ biblioteca, libro }) => biblioteca.some(b => b.nombre == libro.nombre);