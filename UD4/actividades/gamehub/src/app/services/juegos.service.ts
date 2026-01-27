import { Injectable } from '@angular/core';
import { Juego, Plataforma } from '../models/juego.model';

@Injectable({ providedIn: 'root' })
export class JuegosService {
  private readonly juegos: Juego[] = [
    { id: 1, titulo: 'Elden Ring', plataforma: 'PC', genero: 'RPG', precio: 59.99, popular: true },
    { id: 2, titulo: 'Spider-Man 2', plataforma: 'PS5', genero: 'Acción', precio: 79.99, popular: true },
    { id: 3, titulo: 'Halo Infinite', plataforma: 'Xbox', genero: 'Shooter', precio: 39.99, popular: false },
    { id: 4, titulo: 'Zelda: Tears of the Kingdom', plataforma: 'Switch', genero: 'Aventura', precio: 69.99, popular: true },
    { id: 5, titulo: 'Hades', plataforma: 'PC', genero: 'Roguelike', precio: 24.99, popular: false },
  ];

  getAll(): Juego[] {
    return [...this.juegos];
  }

  getById(id: number): Juego | undefined {
    return this.juegos.find(j => j.id === id);
  }

  getByPlataforma(plataforma: Plataforma): Juego[] {
    return this.juegos.filter(j => j.plataforma === plataforma);
  }
}
