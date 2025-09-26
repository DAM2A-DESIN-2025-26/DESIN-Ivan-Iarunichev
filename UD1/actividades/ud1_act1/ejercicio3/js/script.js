function sumaDigitos(){
    var numero = prompt("Introduce un número:");
    var suma = 0;
    for(var i = 0; i < numero.length; i++){
        suma += parseInt(numero[i]);
    }
    alert("La suma de los dígitos es: " + suma);
}

sumaDigitos();