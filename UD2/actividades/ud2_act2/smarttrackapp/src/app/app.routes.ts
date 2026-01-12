import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () => import('./pages/usuario/usuario').then(m => m.Usuario),
    children: [
      {
        path: 'lista',
        loadComponent: () => import('./pages/lista/lista').then(m => m.Lista),
      },
      {
        path: 'anadir',
        loadComponent: () => import('./pages/anadir/anadir').then(m => m.Anadir),
      },
      {
        path: 'editar',
        loadComponent: () => import('./pages/editar/editar').then(m => m.Editar),
      },
      { path: '', pathMatch: 'full', redirectTo: 'lista' },
    ],
  },
  {
    path: 'empresa',
    loadComponent: () => import('./pages/empresa/empresa').then(m => m.Empresa),
  },
  { path: '', pathMatch: 'full', redirectTo: 'usuario' },
];
