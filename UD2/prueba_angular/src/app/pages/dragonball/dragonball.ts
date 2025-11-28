import { Component, signal } from '@angular/core';

interface Personaje {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.scss',
})
export class Dragonball {
  name = signal('');
  power = signal(0);

  pintarValores(){
    const newPersonaje: Personaje = {
      id: this.personaje.length+1,
      name: this.name(),
      power: this.power(),
    }

    this.personaje.update((personajes) => [...personajes, newPersonaje]);
    this.limpiarCampos();
  }

  limpiarCampos(){
    this.name.set("");
    this.power.set(0);
  }

  personaje = signal <Personaje[]>([
    {id: 1, name: "Goku", power: 9900},
    {id: 2, name: "Pikachu", power: 7000},
    {id: 3, name: "Vegeta", power: 4000}
  ])
}
