/************ Setup mínimo en HTML (referencia mental) ************
<div id="app">
  <ul class="lista"></ul>
  <button id="add">Añadir item</button>
</div>
******************************************************************/

/* 1) Seleccionar elementos existentes del DOM */
const app = document.querySelector('#app');          // Primer #app [web:32]
const lista = document.querySelector('.lista');      // Primer .lista [web:32]
const btnAdd = document.querySelector('#add');       // Botón por id [web:32]

/* 2) Crear etiquetas (elementos) en memoria */
function crearItem(texto) {
  const li = document.createElement('li');           // Crea <li> [web:22]
  li.textContent = texto;                            // Contenido seguro [web:24]
  return li;                                         // Devuelve el nodo listo [web:22]
}

/* 3) Insertar como hijo dentro de su padre */
function añadirItemALaLista(texto) {
  const li = crearItem(texto);                       // Crea el hijo [web:22]
  // Opción A: appendChild (uno solo, devuelve el nodo insertado)
  lista.appendChild(li);                             // Inserta al final [web:21]
  // Opción B: append (acepta varios nodos o strings) -> lista.append(li)
  // Nota: usa la que prefieras; ambas añaden como último hijo [web:25]
}

/* 4) Click básico: escuchar el botón para crear un hijo */
if (btnAdd) {
  btnAdd.addEventListener('click', () => {           // Click en botón [web:27]
    const total = lista.querySelectorAll('li').length; // Contar items [web:29]
    añadirItemALaLista('Item ' + (total + 1));       // Crea e inserta [web:22]
  });
}

/* 5) Click por delegación (un solo listener en el padre)
   - Útil si los <li> se crean dinámicamente.
   - Se detecta el click y se actúa sobre el hijo real. */
if (lista) {
  lista.addEventListener('click', (e) => {           // Click en la UL [web:33]
    const li = e.target.closest('li');               // Buscar <li> objetivo [web:38]
    if (!li || !lista.contains(li)) return;          // Validar dentro de la lista [web:33]
    // Acción simple: eliminar el <li> clicado
    li.remove();                                     // Quitar hijo clicado [web:22]
  });
}

/* 6) Variante mínima: crear etiqueta y meterla como hijo directo del #app */
function crearCajaSimple() {
  const div = document.createElement('div');         // Crea <div> [web:22]
  div.textContent = 'Caja dentro de #app';           // Texto [web:24]
  app.appendChild(div);                              // app -> hijo div [web:21]
}
// Llamada opcional:
// crearCajaSimple();

/* Resumen mental:
   - Selección: document.querySelector('#id' / '.clase' / 'tag') [web:32]
   - Crear: document.createElement('li') [web:22]
   - Insertar hijo: padre.appendChild(hijo) o padre.append(hijo) [web:21][web:25]
   - Click: elemento.addEventListener('click', handler) [web:27]
   - Delegación: padre.addEventListener('click', usar e.target/closest) [web:33][web:38]
*/