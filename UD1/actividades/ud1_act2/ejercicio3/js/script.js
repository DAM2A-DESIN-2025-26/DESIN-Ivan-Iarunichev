function numerosCorrectos(){
    //array de numeros
    let numeros = [1, 2, 7, 4, 3];
    
    //bucle para recorrer el array
    //numero.length - 1 para evitar pasar el ultimo elemento
    for(let i = 0; i < numeros.length - 1; i++){
        if(numeros[i] > numeros[i + 1]){
            return i;
        }
    }
    //si todo esta bien se devuelve -1
    return -1;
}
//imprimir el resultado por consola
console.log(numerosCorrectos());
