function infoCumple(){
    // pedir día y mes de cumpleaños
    var fechaActual = new Date();
    var diaActual = fechaActual.getDate();
    var mesActual = fechaActual.getMonth() + 1;
    var anyoActual = fechaActual.getFullYear();

    var diaCumple = prompt("Introduce el día de tu cumpleaños:");
    var mesCumple = prompt("Introduce el mes de tu cumpleaños:");

    // dias que faltan para el cumpleaños
    var diasFaltan;
    if(mesCumple < mesActual || (mesCumple == mesActual && diaCumple < diaActual)){
        var anyoCumple = anyoActual + 1;
    } else {
        var anyoCumple = anyoActual;
    }

    // dia de la semana de tu cumpleaños (cadena)
    var fechaCumple = new Date(anyoCumple, mesCumple - 1, diaCumple);
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    var diaSemanaCumple = diasSemana[fechaCumple.getDay()];

    alert("Naciste un " + diaSemanaCumple);
    alert("Faltan " + Math.ceil((fechaCumple - fechaActual) / (1000 * 60 * 60 * 24)) + " días para tu próximo cumpleaños.");
}
infoCumple();