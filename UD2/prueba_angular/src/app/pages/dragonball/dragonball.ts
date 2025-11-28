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
  name = signal('Goku');
  power = signal(1500);

  pintarValores(){
    console.log(this.name(), this.power());
  }
  personaje = signal <Personaje[]>([
    {id: 1, name: "Goku", power: 9900},
    {id: 2, name: "Pikachu", power: 7000},
    {id: 3, name: "Vegeta", power: 4000}
  ])
}
