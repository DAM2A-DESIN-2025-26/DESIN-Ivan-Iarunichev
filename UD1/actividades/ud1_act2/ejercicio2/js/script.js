function infoCumple(){
    //fecha actual
    var fechaActual = new Date();

    //dia actual
    var diaActual = fechaActual.getDate();
    
    //mes actual +1 ya que cuenta desde 0 y el año actual
    var mesActual = fechaActual.getMonth() + 1;
    var anyoActual = fechaActual.getFullYear();

    //pedir día y mes de cumpleaños
    var diaCumple = prompt("Introduce el día de tu cumpleaños:");
    var mesCumple = prompt("Introduce el mes de tu cumpleaños:");

    //dias que faltan para el cumpleaños
    var diasFaltan;
    //calcular el año del próximo cumpleaños según si ya ha pasado o no este año tu cumpleaños
    if(mesCumple < mesActual || (mesCumple == mesActual && diaCumple < diaActual)){
        //si tu dia y mes de cumpleaños ya han pasado este año, el próximo cumpleaños será el año que viene
        var anyoCumple = anyoActual + 1;
    } else {
        //si no, será este mismo año
        var anyoCumple = anyoActual;
    }

    //dia de la semana de tu cumpleaños
    var fechaCumple = new Date(anyoCumple, mesCumple - 1, diaCumple);
    var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    // obtener el día de la semana
    var diaSemanaCumple = diasSemana[fechaCumple.getDay()];

    alert("Naciste un " + diaSemanaCumple);
    //calcular los días que faltan para tu próximo cumpleaños
    alert("Faltan " + Math.ceil((fechaCumple - fechaActual) / (1000 * 60 * 60 * 24)) + " días para tu próximo cumpleaños.");
}
infoCumple();