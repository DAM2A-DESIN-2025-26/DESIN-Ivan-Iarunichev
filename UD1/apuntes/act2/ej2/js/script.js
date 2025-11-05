function numerosCorrectos(){
    const array = [1,2,3,4,5];
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        contador++;
        if (element !== contador){
            alert(i);
            return i;
        }
    }
    alert(-1);
    return -1;
}
numerosCorrectos();