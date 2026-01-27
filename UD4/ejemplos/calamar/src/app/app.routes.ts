import { Routes } from '@angular/router';
import { CalamarPage } from './calamar/calamar.page';

export const routes: Routes = [
  {
    path: 'calamar',
    component: CalamarPage,
    children: [
      { path: '', redirectTo: 'circulo', pathMatch: 'full' },
      {
        path: 'circulo',
        loadComponent: () =>
          import('./calamar/circulo/circulo.page').then((m) => m.CirculoPage),
      },
      {
        path: 'cuadrado',
        loadComponent: () =>
          import('./calamar/cuadrado/cuadrado.page').then(
            (m) => m.CuadradoPage,
          ),
      },
      {
        path: 'triangulo',
        loadComponent: () =>
          import('./calamar/triangulo/triangulo.page').then(
            (m) => m.TrianguloPage,
          ),
      },
    ],
  },
];
