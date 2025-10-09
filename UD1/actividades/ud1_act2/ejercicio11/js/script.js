// Importamos las clases
import Progenitor from "./progenitor.js";
import Sucesor from "./sucesor.js";
import Familia from "./familia.js";

//Creamos los miembros
const padre = new Progenitor("Ivan", "Pablo", true);
const hija = new Sucesor("Julia", "Paula", false);

//Creamos la familia
const familiaGarcia = new Familia("Adams", 32000);

//Añadimos miembros
familiaGarcia.agregarMiembro(padre);
familiaGarcia.agregarMiembro(hija);

//Invocamos métodos
familiaGarcia.llamadaAComer();
familiaGarcia.vacaciones("Paris", "Roma");
