let nombre = prompt("Introduce el nombre: ");
let apellido1 = prompt("Introduce el primer apellido: ");
let apellido2 = prompt("Introduce el segundo apellido: ");

let nombreApellidosSinEspacio = nombre + apellido1 + apellido2;
let nombreApellidos = nombre + " " + apellido1 + " " + apellido2;

let nombreApellidosMayus = nombreApellidos.toUpperCase();
let nombreApellidosMin = nombreApellidos.toLowerCase();

const propuestaUsuarioAnonima = function(nombre, apellido1, apellido2) {
    return nombre.toLowerCase() + apellido1.charAt(0).toLowerCase() + apellido2.charAt(0).toLowerCase();
};

const propuestaUsuario = (nombre, apellido1, apellido2) =>
    nombre.slice(0,2).toLowerCase() + apellido1.slice(0,2).toLowerCase() + apellido2.slice(0,2).toLowerCase();

alert("Tamaño sin espacios: " + nombreApellidosSinEspacio.length + "\n" +
    "Cadena en Mayúsculas: " + nombreApellidosMayus + "\n" +
    "Cadena en Minúsculas: " + nombreApellidosMin + "\n" +
    "Nombre: " + nombre + "\n" +
    "Apellido 1: " + apellido1 + "\n" +
    "Apellido 2: " + apellido2 + "\n" +
    "Propuesta Usuario Anónima: " + propuestaUsuarioAnonima(nombre, apellido1, apellido2) + "\n" +
    "Propuesta Usuario: " + propuestaUsuario(nombre, apellido1, apellido2) + "\n"
);

//Ampliacion
function creaPassword(nombre) {
    let resultado = '';
    for (let i = 0; i < nombre.length; i++) {
        resultado += nombre[i].toLowerCase() + (i + 1);
    }
    return resultado;
}
alert(creaPassword("Ivan"));