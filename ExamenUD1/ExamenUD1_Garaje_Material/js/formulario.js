const garajes = new Garaje(6);

function actualizaListado(){
    const listado = document.getElementById('listado');
    if (!listado) return;
    if (garajes._coches.length === 0){
        listado.innerHTML = '<p>No hay coches en el garaje</p>';
        return;
    }
    let html = '';
    for (let i = 0; i < garajes._coches.length; i++){
        const coche = garajes._coches[i];
        html += coche.marca + " " 
        + " " + coche.modelo +  " " 
        + coche.matricula + " " 
        + coche.color;
    }
    listado.innerHTML = html;
}

function guardarCoche(){
    const marca = (document.querySelector('marca') || {}).value || '';
    const modelo = document.getElementById('modelo').value || '';
    const matricula = document.getElementById('matricula').value || '';
    const color = document.getElementById('color').value || '';
    garajes.addCoche(marca, modelo, matricula, color);
    actualizaListado();
}

function eliminarCoche(){
    const matricula = document.getElementById('matricula').value || '';
    garajes.eliminaCoche(matricula);
    actualizaListado();
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('guardar').addEventListener('click', guardarCoche);
    document.getElementById('eliminar').addEventListener('click', eliminarCoche);
    actualizaListado();
});