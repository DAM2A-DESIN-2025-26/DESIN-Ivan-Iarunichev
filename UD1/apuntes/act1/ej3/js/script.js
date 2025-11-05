function sumaDigitos(){
    let numero = prompt("Introduce un numero");
    let suma = 0;

    for (let i = 0; i < numero.length; i++) {
        suma += parseInt(numero[i]);    
    }
    alert("Suma de numeros es: " + suma);
}

sumaDigitos();