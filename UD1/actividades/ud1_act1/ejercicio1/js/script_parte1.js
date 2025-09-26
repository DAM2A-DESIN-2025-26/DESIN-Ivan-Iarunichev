var nombre = "Ivan";
var apellido = "Iarunichev";

var anioDeNaciomiento = 2005;
var dineroBanco = 2000;

var dineroTotal = dineroBanco + 10000;
//tipos de datos de las cuarto variables
console.log(typeof(nombre));
console.log(typeof(apellido));
console.log(typeof(añoDeNaciomiento));
console.log(typeof(dineroBanco));

/*nombre y apellido separados por un espacio y a continuacion 
el dinero en el banco que tendre dentro de 2 años*/

var mensaje = `\n Nombre y Apellido: ${nombre} ${apellido} \n Dinero dentro de 2 años: ${dineroTotal}`;
console.log(mensaje);