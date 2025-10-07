function tiposEnArray(){
    //array con diferentes tipos de datos
    let tiposEnArray = [true, 1, "Casa", function(){}];

    //bucle que recorre el array y muestra el tipo de dato de cada elemento
    for(let i = 0; i < tiposEnArray.length; i++){
        console.log(typeof tiposEnArray[i]);
        //no se como mostrarlo en una sola linea entre []
    }
}
tiposEnArray();