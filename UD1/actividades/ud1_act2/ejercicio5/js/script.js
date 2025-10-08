let paises = ["España", "Inglaterra", "Francia", "Alemania"];

//Muestra todos los elementos del array con for ... of
console.log("\n");
console.log("for ... of:");
for (let pais of paises) {
    console.log(pais);
}

//Muestra todos los elementos del array con foreach en sentido inverso
console.log("\n");
console.log("forEach:");
paises.slice().reverse().forEach(pais => console.log(pais));

//Muestra todos los elementos del array alfabéticamente
console.log("\n");
console.log("Alfabéticamente:");
paises.sort().forEach(pais => console.log(pais));

//Añadir un elemento al comienzo del array
console.log("\n");
console.log("Añadir un elemento comienzo:");
paises.unshift("Italia");
paises.forEach(pais => console.log(pais));

//Añadir un elemento al final del array
console.log("\n");
console.log("Añadir un elemento final:");
paises.push("Portugal");
paises.forEach(pais => console.log(pais));

//Eliminar el primer elemento del array
console.log("\n");
console.log("Eliminar primer elemento:");
paises.shift();
paises.forEach(pais => console.log(pais));

//Eliminar el último elemento del array
console.log("\n");
console.log("Eliminar último elemento:");
paises.pop();
paises.forEach(pais => console.log(pais));