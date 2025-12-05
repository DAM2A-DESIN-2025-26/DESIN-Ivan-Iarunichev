import { Component, inject, signal } from '@angular/core';
import { PersonajesList } from "../../components/personajes-list/personajes-list";
import { PersonajeAdd } from "../../components/personaje-add/personaje-add";
import { DragonballService } from '../../services/dragonball.service';

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
  dragonballService = inject(DragonballService);
}
