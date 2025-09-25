/**
 * DESIN- UD1 Ejemplo 1 -Uso del depurador JS. Encontrar los errores del script
 * @author Javi G. Pisano
 * 
 * Realiza un script que se encargue de leer 10 nombres por pantalla y los inserte en un array. 
 * Posteriormente, los nombres se mostrarán una unica ventana emergente
 */

var nombres = [];
var numeroNombres = 10;
var cadenaNombres = "";

for (var i = 0; i < numeroNombres; i++) {
    nombres[i] = prompt("Introduce un nombre", "Agapito");
}

for (var i = 0; i < numeroNombres; i++) {
    cadenaNombres = cadenaNombres + nombres[i] + " ";
}

alert(cadenaNombres);


