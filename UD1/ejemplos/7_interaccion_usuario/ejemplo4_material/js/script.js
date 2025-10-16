//Gato

if (document.querySelector("#lia")) {
    let contador = 0;
    document.querySelector("#lia").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-lia").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Lia";
    });
} 

if (document.querySelector("#mia")) {
    let contador = 0;
    document.querySelector("#mia").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-mia").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Mia";
    });
}

if (document.querySelector("#lora")) {
    let contador = 0;
    document.querySelector("#lora").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-lora").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Lora";
    });
}

//Perro

if (document.querySelector("#lomo")) {
    let contador = 0;
    document.querySelector("#lomo").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-lomo").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Lomo";
    });
}

if (document.querySelector("#paco")) {
    let contador = 0;
    document.querySelector("#paco").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-paco").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Paco";
    });
}

if (document.querySelector("#pablo")) {
    let contador = 0;
    document.querySelector("#pablo").addEventListener("click", function() {
        contador++;
        document.querySelector(".mensaje-pablo").innerHTML = "Pulsaciones: " + contador;
        document.querySelector("#ultimo").innerHTML = "El ultimo pulsado es Pablo";
    });
}