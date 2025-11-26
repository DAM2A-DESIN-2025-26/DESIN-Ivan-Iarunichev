import { Component,computed,signal } from "@angular/core";

@Component({
  templateUrl: './hero.html'
})
export class Hero {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed (() => `${this.name()} - ${this.age()}`);

  changeHero(){
    this.name.set('Spiderman');
  }

  changeAge(){
    this.age.set(33);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }
}
