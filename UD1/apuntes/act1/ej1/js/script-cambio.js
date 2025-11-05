let nombre = prompt("Introduce tu nombre: ");
let apellidos = prompt("Introduce tu apellido: ");
let anioNacimiento = prompt("Introduce año de nacimiento: ");
let dineroBanco = parseInt(prompt("Introudce dinero en el banco: "));

let dineroFuturo = dineroBanco + 10000

let mensaje = `Nombre: ${nombre} \n Apellido: ${apellidos}
    \n Año de Nacimiento: ${anioNacimiento}
    \n Dinero en el Banco: ${dineroBanco} €
    \n \n Dinero en 2 años:  ${dineroFuturo}`;

alert(mensaje)
