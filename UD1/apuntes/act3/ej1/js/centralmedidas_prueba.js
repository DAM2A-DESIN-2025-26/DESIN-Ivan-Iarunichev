import { centralmedidas } from "./centralmedidas.js";

function valoresAleatorios() {
  let arr = [];
  for (let i = 0; i < 30; i++) {
    arr.push(Math.floor(Math.random() * (40 - -10 + 1)) + -10);
  }
  return arr;
}

const cm = new centralmedidas();
cm.insertaMedidas('Santander', valoresAleatorios());
cm.insertaMedidas('Oviedo', valoresAleatorios());
cm.insertaMedidas('Madrid', valoresAleatorios());
cm.insertaMedidas('Valencia', valoresAleatorios());
cm.insertaMedidas('Cádiz', valoresAleatorios());

cm.toConsole();
