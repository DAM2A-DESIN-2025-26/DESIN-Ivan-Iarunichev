import { CentralMedidas } from "./centralmedidas";

const central = new CentralMedidas();

central.insertaMedidas("Santander", Array(30).fill(5).map((v, i) => i % 10 + 2));
central.insertaMedidas("Oviedo", Array(30).fill(3).map((v, i) => (i % 5) * 2));
central.insertaMedidas("Madrid", Array(30).fill(0).map((v, i) => i - 15));
central.insertaMedidas("Valencia", Array(30).fill(8).map((v, i) => (i % 6) + 8));
central.insertaMedidas("Cádiz", Array(30).fill(10).map((v, i) => i % 10 + 10));

console.log("Tabla de medidas:");
central.toConsole();

central.insertaAleatoria("Sevilla");
console.log("Tabla de medidas tras insertar Sevilla aleatoriamente:");
central.toConsole();

console.log("Medida de Santander:", central.mediaMedidas("Santander"));
console.log("Medida total: ", central.mediaMedidasTotal());

console.log("Eliminando Oviedo:", central.eliminarCiudad("Oviedo"));
console.log("Tabla de medidas tras eliminar Oviedo:");
central.toConsole();