function tablaMultiplicar() {
    let num = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += num + " * " + i + " = " + (num * i) + "\n";
    }
    return resultado;
}

console.log(tablaMultiplicar(numero));