export type Plataforma = 'PC' | 'PS5' | 'Xbox' | 'Switch';

export interface Juego {
  id: number;
  titulo: string;
  plataforma: Plataforma;
  genero: string;
  precio: number;
  popular: boolean;
}
