import { CentralMedidas } from "./centralmedidas.js";

const central = new CentralMedidas();

window.onload = () => {
    const ciudadInput = document.getElementById("ciudad");
    const medidasInput = document.getElementById("medidas");
    const erroresDiv = document.getElementById("errores");
    const tablaDiv = document.getElementById("tabla-medidas");
    const mediaDiv = document.getElementById("temperatura-media");

    const guardado = localStorage.getItem("centralMedidas");
    if (guardado) {
        central.setMedidas(JSON.parse(guardado));
        actualizarVista();
    }

    document.querySelectorAll("input[name='modo']").forEach(radio => {
        radio.addEventListener("change", () => {
            medidasInput.value = "";
            medidasInput.readOnly = radio.value === "aleatorio";
        });
    });

    document.getElementById("guardar").onclick = () => {
        erroresDiv.style.display = "none";
        const ciudad = ciudadInput.value.trim().toUpperCase();
        const modo = document.querySelector("input[name='modo']:checked")?.value;

        if (!ciudad) return mostrarError("El campo Ciudad no puede estar vacío.");

        let ok = false;
        if (modo === "manual") {
            const valores = medidasInput.value.split(",").map(v => parseInt(v.trim()));
            if (valores.length !== 30 || valores.some(v => isNaN(v) || v < -10 || v > 40)) {
                return mostrarError("Debe introducir 30 valores válidos entre -10 y 40.");
            }
            ok = central.insertarMedida(ciudad, valores);
        } else if (modo === "aleatorio") {
            ok = central.insertaAleatoria(ciudad);
        } else {
            return mostrarError("Debe seleccionar un modo de entrada.");
        }

        if (!ok) return mostrarError("No se pudo insertar la ciudad (ya existe o datos inválidos).");

        actualizarVista();
    };

    document.getElementById("borrar").onclick = () => {
        const ciudad = ciudadInput.value.trim().toUpperCase();
        if (!ciudad) return mostrarError("Debe indicar una ciudad para borrar.");
        if (!central.eliminarCiudad(ciudad)) return mostrarError("La ciudad no existe.");
        actualizarVista();
    };

    window.onbeforeunload = () => {
        localStorage.setItem("centralMedidas", JSON.stringify(central.getMedidas()));
    };

    function actualizarVista() {
        tablaDiv.innerHTML = central.toHTML();
        const media = central.mediaMedidasTotal();
        mediaDiv.innerHTML = media !== null
            ? `<b>Temperatura media total: ${media}°C</b>`
            : "";
        localStorage.setItem("centralMedidas", JSON.stringify(central.getMedidas()));
    }

    function mostrarError(msg) {
        erroresDiv.style.display = "block";
        erroresDiv.textContent = msg;
    }
};