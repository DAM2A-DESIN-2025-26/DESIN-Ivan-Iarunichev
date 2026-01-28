import { Routes } from '@angular/router';
import { CalamarPage } from './calamar/calamar.page';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'calamar',
    pathMatch: 'full',
  },
  {
    path: 'calamar',
    loadComponent: () => import('./calamar/calamar.page').then(m => m.CalamarPage),  
    children: [
      { path: '', redirectTo: 'cuadrado', pathMatch: 'full' },
      {
        path: 'circulo',
        loadComponent: () => import('./calamar/circulo/circulo.page').then(m => m.CirculoPage)
      },
      {
        path: 'triangulo',
        loadComponent: () => import('./calamar/triangulo/triangulo.page').then(m => m.TrianguloPage)
      },
      {
        path: 'cuadrado',
        loadComponent: () => import('./calamar/cuadrado/cuadrado.page').then(m => m.CuadradoPage)
      }
    ]
  },
];
