function mostrarPaises(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    for (const pais of paises) {
        console.log(pais);
    }
}
//mostrarPaises();

function mostrarElementos(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.reverse().forEach(pais => {
        console.log(pais);
    });
}
//mostrarElementos();

function mostrarAlfabeticamente(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.sort().forEach(pais => {
        console.log(pais);
    });
}
//mostrarAlfabeticamente();

function añadirPrincipio(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.unshift("Italia");
    paises.forEach(pais => { 
        console.log(pais);
    });
}
//añadirPrincipio();

function añadirFinal(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.push("Croacia");
    paises.forEach(pais => {
        console.log(pais);
    });
}
//añadirFinal();

function eliminarPrimero(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.shift();
    paises.forEach(pais => {
        console.log(pais);
    });
}
//eliminarPrimero();

function eliminarUltimo(){
    paises = ["Alemania", "Rusia", "España", "Australia"];
    paises.pop();
    paises.forEach(pais => {
        console.log(pais);
    });
}
eliminarUltimo();