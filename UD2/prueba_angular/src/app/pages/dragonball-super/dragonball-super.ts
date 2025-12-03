import { Component, signal } from '@angular/core';
import { PersonajesList } from "../../components/personajes-list/personajes-list";
import { PersonajeAdd } from "../../components/personaje-add/personaje-add";

interface Personaje {
  id: number;
  name: string;
  power: number
}

@Component({
  selector: 'app-dragonball',
  imports: [PersonajesList, PersonajeAdd],
  templateUrl: './dragonball-super.html'
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  addPersonaje(personaje: Personaje){
    this.personaje.update((personajes) => [...personajes, personaje]);
  }

  personaje = signal <Personaje[]>([
    {id: 1, name: "Goku", power: 9900},
    {id: 2, name: "Pikachu", power: 7000}
  ])
}
