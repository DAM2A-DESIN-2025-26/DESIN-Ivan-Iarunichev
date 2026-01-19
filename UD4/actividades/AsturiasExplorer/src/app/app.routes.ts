import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.component').then((m) => m.InicioComponent)
  },
  {
    path: 'rutas',
    loadComponent: () => import('./pages/rutas/rutas.component').then((m) => m.RutasComponent)
  },
  {
    path: 'gastro',
    loadComponent: () => import('./pages/gastro/gastro.component').then((m) => m.GastroComponent)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
];
