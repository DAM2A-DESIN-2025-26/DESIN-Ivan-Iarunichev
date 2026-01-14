import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () =>
      import('./pages/user-navbar/user-navbar').then((m) => m.UserNavbar),
    children: [
      {
        path: 'lista',
        loadComponent: () =>
          import('./pages/user-list-component/user-list-component').then(
            (m) => m.UserListComponent
          ),
      },
      {
        path: 'anadir',
        loadComponent: () =>
          import('./pages/user-add-component/user-add-component').then(
            (m) => m.UserAddComponent
          ),
      },
      {
        path: 'editar/:dni',
        loadComponent: () =>
          import('./pages/user-edit-component/user-edit-component').then(
            (m) => m.UserEditComponent
          ),
      },
      {
        path: '',
        redirectTo: 'lista',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'usuario',
    pathMatch: 'full',
  },
];
