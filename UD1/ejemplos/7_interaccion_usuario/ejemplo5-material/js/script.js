alert("Iniciamos los cambios");

// Crear contenedor, enlace y párrafo inicial
var caja = document.createElement("div");
var enlace = document.createElement("a");
var parrafo = document.createElement("p");
var texto = document.createTextNode("Soy un enlace");

enlacce.setAtribute("href", "https://www.google.com");
enlace.appendChild(texto);


var parrafo = document.createElement("p");
var texto = document.createTextNode("Me van a cambiar");
parrafo.appendChild(texto);


caja.appendChild(enlace);
caja.appendChild(parrafo);
document.body.appendChild(caja);


var fechaP = document.createElement("p");

var textoFecha = document.createTextNode(new Date().toLocaleString());
fechaP.appendChild(textoFecha);
document.body.insertBefore(fechaP, caja);


var parrafoFinal = document.createElement("p");
var textoFinal = document.createTextNode("Contenido párrafo");
parrafoFinal.appendChild(textoFinal);
document.body.appendChild(parrafoFinal);

// Borrar el enlace
enlace.remove();

parrafo.textContent = "Ivan Iarunichev";