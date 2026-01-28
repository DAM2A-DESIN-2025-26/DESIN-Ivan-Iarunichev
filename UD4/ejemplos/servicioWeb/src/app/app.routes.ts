import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lista-productos',
    loadComponent: () => import('./lista-productos/lista-productos.page').then( m => m.ListaProductosPage)
  },
];
