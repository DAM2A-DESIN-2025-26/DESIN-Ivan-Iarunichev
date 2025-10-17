var caja = document.createElement("div");
var boton = document.createElement("button");
var textoBoton = document.createTextNode("Añadir");

boton.appendChild(textoBoton);
caja.appendChild(boton);
document.body.appendChild(caja);

boton.addEventListener("click", function(){
    var caja = document.createElement("div");
    var parrafo = document.createElement("p");
    var lista = document.createElement("ul");
    var listaTexto = document.createTextNode("Lista compra: ");

    lista.appendChild(listaTexto);

    var elemento1 = document.createElement("li");
    var elemento1Texto = document.createTextNode("elemento1");

    var elemento2 = document.createElement("li");
    var elemento2Texto = document.createTextNode("elemento2");

    var elemento3 = document.createElement("li");
    var elemento3Texto = document.createTextNode("elemento3");

    var elemento4 = document.createElement("li");
    var elemento4Texto = document.createTextNode("elemento4");

    elemento1.appendChild(elemento1Texto);
    lista.appendChild(elemento1);

    elemento2.appendChild(elemento2Texto);
    lista.appendChild(elemento2);

    elemento3.appendChild(elemento3Texto);
    lista.appendChild(elemento3);

    elemento4.appendChild(elemento4Texto);
    lista.appendChild(elemento4);

    var textoLista = document.createTextNode("Si es la primera vez que pulsa, deberá de crearse el listado.");


    parrafo.appendChild(textoLista);
    caja.appendChild(parrafo);
    caja.appendChild(lista);
    document.body.appendChild(caja);

    boton.remove();

    var boton2 = document.createElement("button");
    var textoBoton2 = document.createTextNode("Quitar");

    boton2.appendChild(textoBoton2);
    caja.appendChild(boton2);

    boton2.addEventListener("click", function(){
        caja.remove();
        document.body.appendChild(boton);
    });
}); 