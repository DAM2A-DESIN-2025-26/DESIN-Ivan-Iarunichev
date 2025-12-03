import { Component, output, signal } from '@angular/core';
import { Personaje } from '../../interfaces/personajes-interface';

@Component({
  selector: 'personaje-add',
  imports: [],
  templateUrl: './personaje-add.html',
})
export class PersonajeAdd {
  name = signal('');
  power = signal(0);

  newPersonaje = output<Personaje>();

  crearPersonaje() {
    const newPers: Personaje = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    this.newPersonaje.emit(newPers);
    // this.personaje.update((personajes) => [...personajes, newPersonaje]);
    this.limpiarCampos();
  }

  limpiarCampos() {
    this.name.set('');
    this.power.set(0);
  }
}
