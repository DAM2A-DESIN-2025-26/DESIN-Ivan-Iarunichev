import { Component, input } from '@angular/core';
import { Personaje } from '../../interfaces/personajes-interface';

@Component({
  selector: 'personajes-list',
  imports: [],
  templateUrl: './personajes-list.html'
})
export class PersonajesList {
  personaje = input<Personaje[]>()
}
