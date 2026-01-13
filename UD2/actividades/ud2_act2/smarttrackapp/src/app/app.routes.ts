import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () => import('./pages/user-navbar/user-navbar').then(m => m.UserNavbar),
    children: [
      {
        path: 'lista',
        loadComponent: () => import('./pages/user-list-component/user-list-component').then(m => m.UserListComponent),
        runGuardsAndResolvers: 'always'
      },
      {
        path: 'anadir',
        loadComponent: () => import('./pages/user-add-component/user-add-component').then(m => m.UserAddComponent),
      },
      {
        path: 'editar',
        loadComponent: () => import('./pages/user-edit-component/user-edit-component').then(m => m.UserEditComponent),
      },
      { path: '', pathMatch: 'full', redirectTo: 'lista' },
    ],
  },
  {
    path: 'empresa',
    loadComponent: () => import('./pages/company-navbar/company-navbar').then(m => m.CompanyNavbar),
  },
  { path: '', pathMatch: 'full', redirectTo: 'usuario' },
];
