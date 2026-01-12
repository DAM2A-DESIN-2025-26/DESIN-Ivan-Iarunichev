import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () => import('./pages/usuario/usuario').then(m => m.Usuario),
  },

  {
    path: 'empresa',
    loadComponent: () => import('./pages/empresa/empresa').then(m => m.Empresa),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'usuario',
  },
];
