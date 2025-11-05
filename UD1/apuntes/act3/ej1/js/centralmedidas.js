export class centralmedidas {
  #medidas;

    constructor() {
        this.#medidas = [];
    }


  // Añadir medidas manualmente
  insertaMedidas(ciudad, valores) {
    for (let i = 0; i < this.#medidas.length; i++) {
      if (this.#medidas[i][0] === ciudad) {
        console.log("Ciudad ya existe");
        return false;
      }
    }
    if (valores.length !== 30) {
      console.log("Error: deben ser 30");
      return false;
    }
    this.#medidas.push([ciudad, ...valores]);
    return true;
  }

  // Añadir medidas aleatorias
  insertaAleatorio(ciudad) {
    for (let i = 0; i < this.#medidas.length; i++) {
      if (this.#medidas[i][0] === ciudad) {
        console.log("Ciudad ya existe");
        return false;
      }
    }
    let valores = [];
    for (let i = 0; i < 30; i++) {
      valores.push(Math.floor(Math.random() * (40 - -10 + 1)) + -10);
    }
    this.#medidas.push([ciudad, ...valores]);
    return true;
  }

  // Media de una ciudad
  mediaMedidas(ciudad) {
    for (let i = 0; i < this.#medidas.length; i++) {
      if (this.#medidas[i][0] === ciudad) {
        let suma = 0;
        for (let j = 1; j <= 30; j++) {
          suma += this.#medidas[i][j];
        }
        return suma / 30;
      }
    }
    console.log("No existe ciudad");
    return null;
  }

  // Media total
  mediaMedidasTotal() {
    let suma = 0;
    let totalValores = 0;
    for (let i = 0; i < this.#medidas.length; i++) {
      for (let j = 1; j <= 30; j++) {
        suma += this.#medidas[i][j];
        totalValores++;
      }
    }
    if (totalValores === 0) return null;
    return suma / totalValores;
  }

  // Eliminar ciudad
  eliminarCiudad(ciudad) {
    for (let i = 0; i < this.#medidas.length; i++) {
      if (this.#medidas[i][0] === ciudad) {
        this.#medidas.splice(i, 1);
        return true;
      }
    }
    console.log("La ciudad no existe");
    return false;
  }

  // Mostrar en consola
  toConsole() {
    let tabla = {};
    for (let i = 0; i < this.#medidas.length; i++) {
          let ciudad = this.#medidas[i][0];
          let valores = {};
          for (let j = 0; j < this.#medidas[i].length; j++) {
              valores[j] = this.#medidas[i][j];
          }
          tabla[ciudad] = valores;
    }
    console.table(tabla);
  }
}