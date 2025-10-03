let nombre = prompt("Introduce tu nombre: ");
let apellido1 = prompt("Introduce tu apellido: ");
let apellido2 = prompt("Introduce tu segundo apellido: ");

// Número de caracteres sin espacios
let numCaracteres = nombre.length + apellido1.length + apellido2.length;
alert(`El número de caractéres sin separación es: ${numCaracteres}`);

// La cadeana en mayúsculas y minúsculas
alert(`Cadena en mayusculas: ${nombre.toUpperCase()} ${apellido1.toUpperCase()} ${apellido2.toUpperCase()}`);
alert(`Cadena en minusculas: ${nombre.toLowerCase()} ${apellido1.toLowerCase()} ${apellido2.toLowerCase()}`);

// Que divida el nombre y los apellidos y los muestre en 3 lineas
alert(`Nombre: ${nombre} \n Apellido 1: ${apellido1} \n Apellido 2: ${apellido2}`);

// Hacer que se proponga un nombre de usuario
let nombreMinuscula = nombre.toLowerCase();
let apellido1Minuscula = apellido1.toLowerCase();
let apellido2Minuscula = apellido2.toLowerCase();

alert(`El usuario recomendad: ${nombreMinuscula}${apellido1Minuscula.charAt(0)}${apellido2Minuscula.charAt(0)}`);

// Hacer que se proponga un nombre de usuario diferente
alert(`Otra usuario recomendado: ${nombreMinuscula.slice(0,2)}${apellido1Minuscula.slice(0,2)}${apellido2Minuscula.slice(0,2)}`);

// Contraseña separando cada letra por un numero mediante una función