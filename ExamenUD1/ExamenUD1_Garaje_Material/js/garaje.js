class Garaje {
    constructor(_numMaxCoches = 6){
        this._coches = [];
        this._numMaxCoches = _numMaxCoches;
    }

    addCoche(marca, modelo, matricula, color){

        marca = marca.toUpperCase();
        modelo = modelo.toUpperCase();
        matricula = matricula.toUpperCase();
        color = color.toUpperCase;

        if (this._coches.length >= this._numMaxCoches) {
            return false;
        }

        for (let i = 0; i < this._coches.length; i++) {
            if (this._coches[i].matricula === matricula) {
                console.log('Matricula ya existe');
                return false;
            }
        }

        this._coches.push({marca: marca, modelo: modelo, matricula: matricula, color: color});
        console.log('Coche se guardo correctamente');
        return true;
    }

    getCoche(matricula){
        if (!matricula) return null;
        matricula = matricula.toUpperCase;
        for (let i = 0; i < this._coches.length; i++) {
            if (this._coches[i].matricula === matricula) {
                return this._coches[i];
            }
        }
        console.log('Matricula no encontrada');
        return null;
    }

    eliminaCoche(matricula){
        if (!matricula) return false;
        matricula = matricula.toUpperCase;
        for (let i = 0; i < this._coches.length; i++) {
            if (this._coches[i].matricula === matricula) {
                this._coches.splice(i, 1);
                console.log('Coche se elimino correctamente');
                return true;
            }
        }
        return false;
    }

    
    existeCoche(matricula){
        if (!matricula) return false;
        matricula = matricula.toUpperCase;
        for (let i = 0; i < this._coches.length; i++) {
            if (this._coches[i].matricula === matricula) {
                return true;
            }
        }
        return false;
    }
}