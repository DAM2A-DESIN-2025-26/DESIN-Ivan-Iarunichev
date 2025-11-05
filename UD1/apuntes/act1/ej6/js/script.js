function valorABilletes(numero){
    const billetes = [500, 200, 100, 50, 20, 10, 1];
    const contador = [];

    for (let i = 0; i < billetes.length; i++) {
        const valor = billetes[i];
        let cantidad = Math.floor(numero/valor);
        contador.push(cantidad);

        numero %= valor;
    }

    alert(contador.join('-') + "\n" +
            "787" + " son " + contador[0] + " x 500 euros, " +
            contador[1] + " x 200 euros, " +
            contador[2] + " x 100 euros, " +
            contador[3] + " x 50 euros, " +
            contador[4] + " x 20 euros, " +
            contador[5] + " x 10 euros, " +
            contador[6] + " x 1 euro"
    );
}

valorABilletes(787);