document.cookie = "username=Ivan";

function compruebaCompatibilidad(){
    if (typeof(Storage) !== "undefined") {
        console.log("Tu navegador soporta Web Storage");
    } else {
        console.log("Tu navegador NO soporta Web Storage");
    }
}
compruebaCompatibilidad();

function guardarDatos(clave, valor){
    localStorage.setItem(clave, valor);
}

guardarDatos("nombre", "Iván");
guardarDatos("apellido", "García");
guardarDatos("edad", "30");


function recuperarDatos(clave){
    return localStorage.getItem(clave);
}

console.log(recuperarDatos("mes")); //Octubre

function muestraTodosLosDatos(){
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let valor = localStorage.getItem(clave);
        console.log(clave + ": " + valor);
    }
}

muestraTodosLosDatos();

function eliminarDato(clave){
    localStorage.removeItem(clave);
}

eliminarDato("edad");

muestraTodosLosDatos();

localStorage.clear();

muestraTodosLosDatos();