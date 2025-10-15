var calendario = document.getElementById("calendario")
var fecha = new Date();

let mes = fecha.toLocaleString('es-ES', { month: 'long' });
mes = mes.charAt(0).toUpperCase() + mes.slice(1);

calendario.innerHTML = `
    <div id="anio">${fecha.getFullYear()}</div>
	<div id="dia">${fecha.getDate()}</div>
	<div id="mes">${mes}</div>
`;