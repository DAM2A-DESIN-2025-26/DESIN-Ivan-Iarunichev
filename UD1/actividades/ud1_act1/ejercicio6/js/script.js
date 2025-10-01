function valorABilletes(cantidad) {
    const valores = [500, 200, 100, 50, 20, 10, 5];
    let resultado = new Array(valores.length);
    let restante = cantidad;

    for (let i = 0; i < valores.length; i++) {
        resultado[i] = parseInt(restante / valores[i]);
        restante = restante % valores[i];
    }
    return resultado;
}

let cantidad = 786;
let billetes = valorABilletes(cantidad);

let totalBilletes = 0;
for (let i = 0; i < billetes.length; i++) {
    totalBilletes += billetes[i];
}

let mensaje = `Para ${cantidad} euros necesitas un total de ${totalBilletes} billetes:\n`;
let tipos = [500, 200, 100, 50, 20, 10, 5];
for (let i = 0; i < billetes.length; i++) {
    if (billetes[i] > 0) {
        mensaje += `${billetes[i]} billete(s) de ${tipos[i]} euros\n`;
    }
}

mensaje += `En línea: ${billetes.join("")}`;

alert(mensaje);