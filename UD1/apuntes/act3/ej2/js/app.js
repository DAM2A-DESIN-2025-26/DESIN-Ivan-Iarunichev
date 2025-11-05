    const central = new CentralMedidas();

function mostrarDatos() {
    document.getElementById("tabla-medidas").innerHTML = central.toHTML();
    let media = central.mediaMedidasTotal();
    document.getElementById("temperatura-media").innerText =
        (media !== null) ? "Media total: " + media : "";
}

function mostrarError(msg) {
    const errores = document.getElementById("errores");
    errores.innerText = msg;
    errores.style.display = "block";
}

function ocultarError() {
    const errores = document.getElementById("errores");
    errores.style.display = "none";
}

document.getElementById("ciudad").addEventListener('input', function(e) {
    this.value = this.value.toUpperCase();
});

const tipoRadios = document.getElementsByName("tipo");
for (let i = 0; i < tipoRadios.length; i++) {
    tipoRadios[i].addEventListener('change', function() {
        const medidas = document.getElementById("medidas");
        medidas.value = "";
        medidas.readOnly = (this.value === "aleatorio");
    });
}

document.getElementById("form-temperaturas").addEventListener("submit", function(e) {
    e.preventDefault();
    ocultarError();

    let ciudad = document.getElementById("ciudad").value.trim().toUpperCase();
    let tipo = document.querySelector("input[name='tipo']:checked").value;
    let ok = false;

    if (!ciudad) {
        mostrarError("El campo ciudad está vacío.");
        return;
    }
    if (central.existeCiudad(ciudad)) {
        mostrarError("La ciudad ya existe.");
        return;
    }
    if (tipo == "aleatorio") {
        ok = central.insertaAleatorio(ciudad);
    } else {
        let valores = document.getElementById("medidas").value.split(",");
        if (valores.length !== 30) {
            mostrarError("Debes introducir 30 valores.");
            return;
        }
        valores = valores.map(v => parseInt(v));
        for (let i = 0; i < valores.length; i++) {
            if (isNaN(valores[i]) || valores[i] < -10 || valores[i] > 40) {
                mostrarError("Valores fuera de rango (-10 a 40).");
                return;
            }
        }
        ok = central.insertaMedidas(ciudad, valores);
    }

    if (ok) {
        mostrarDatos();
        document.getElementById("form-temperaturas").reset();
    } else {
        mostrarError("Error al insertar los datos.");
    }
    guardarEnLocalStorage();
});

document.getElementById("borrar").addEventListener("click", function() {
    ocultarError();
    let ciudad = document.getElementById("ciudad").value.trim().toUpperCase();
    if (!ciudad) {
        mostrarError("Introduce el nombre de la ciudad para borrar.");
        return;
    }
    if (central.eliminaCiudad(ciudad)) {
        mostrarDatos();
        guardarEnLocalStorage();
    } else {
        mostrarError("La ciudad no existe.");
    }
});

function guardarEnLocalStorage() {
    localStorage.setItem("centralmedidas", central.toJSON());
}

function cargarDeLocalStorage() {
    let datos = localStorage.getItem("centralmedidas");
    if (datos) {
        central.fromJSON(datos);
        mostrarDatos();
    }
}

window.addEventListener("load", cargarDeLocalStorage);
window.addEventListener("beforeunload", guardarEnLocalStorage);
