//datos introducidos por el usuario
var nombreUsuario = prompt("Introduce tu nombre: ");
var apellidoUsuario = prompt("Introduce tu apellido: ");

var anioDeNaciomientoUsuario = prompt("Introduce tu año de nacimiento: ");
var dineroBancoUsuario = prompt("Introduce el dinero cuanto tienes en el banco: ");

var dineroTotal = dineroBancoUsuario + 10000;

var mensaje = `\n Nombre: ${nombreUsuario} - Apellido: ${apellidoUsuario} \n Año de nacimiento: ${anioDeNaciomientoUsuario} \n Dinero en el banco: ${dineroTotal}`;
console.log(mensaje);