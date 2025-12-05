import { inject, Injectable, signal } from '@angular/core';
import { Personaje } from '../interfaces/personajes-interface';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  private http = inject(HttpClient);
  private urlApi = "https://dragonball-api.com/api/characters"
  cargarPersonajes(){
    this.http.get(this.urlApi).subscribe({
      next: (resp) => {
        const lista: Personaje[] = resp.map((valor: any, index: number) => {
          id: valor.id;
          name: valor.name;
          power: valor.ki;
        })
      },
      error: () => {
        console.log("Se ha producido un error");
      }
    })
  }

  addPersonaje(personaje: Personaje){
    this.personaje.update((personajes) => [...personajes, personaje]);
  }

  personaje = signal <Personaje[]>([
    {id: 1, name: "Goku", power: 9900},
    {id: 2, name: "Pikachu", power: 7000}
  ])
}
