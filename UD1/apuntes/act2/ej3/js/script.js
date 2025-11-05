function tiposEnArray(){
    tiposEnArray = [true, 1, "Casa", function(){}];
    for (let i = 0; i < tiposEnArray.length; i++) {
        const element = tiposEnArray[i];
        console.log(typeof element);
    }
}
tiposEnArray();