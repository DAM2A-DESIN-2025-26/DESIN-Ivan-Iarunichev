import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Personaje {
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: './dragonball-page.html',
  imports: [
    // NgClass
  ],
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

  personajes = signal<Personaje[]>([
    { id: 1, name: 'Goku', power: 9001 },
    // { id: 2, name: 'Vegeta', power: 8000 },
    // { id: 4, name: 'Yamcha', power: 500 },
    // { id: 3, name: 'Piccolo', power: 3000 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });

  addPersonaje() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newPersonaje: Personaje = {
      id: this.personajes().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.personajes.update((list) => [...list, newPersonaje]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
