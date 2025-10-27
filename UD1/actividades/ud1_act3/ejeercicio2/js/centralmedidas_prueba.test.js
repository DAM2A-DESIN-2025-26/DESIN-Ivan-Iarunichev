import { CentralMedidas } from "js/centralmedidas.js";

const central = new CentralMedidas();

console.log("Insertando ciudades manualmente...");
const valoresMadrid = Array.from({ length: 30 }, (_, i) => i + 1);
const valoresOviedo = Array.from({ length: 30 }, (_, i) => 5);

console.log(central.insertarMedida("MADRID", valoresMadrid));
console.log(central.insertarMedida("OVIEDO", valoresOviedo));
console.log(central.insertarMedida("MADRID", valoresOviedo));

console.log("Insertando ciudad aleatoria...");
console.log(central.insertaAleatoria("VALENCIA"));
console.log(central.insertaAleatoria("VALENCIA"));

console.log("Media de MADRID:", central.mediaMedidas("MADRID"));
console.log("Media total:", central.mediaMedidasTotal());

console.log("Eliminando OVIEDO...");
console.log(central.eliminarCiudad("OVIEDO"));
console.log(central.eliminarCiudad("OVIEDO"));

console.log("Mostrando por consola:");
central.toConsole();