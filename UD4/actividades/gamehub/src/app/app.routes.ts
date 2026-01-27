import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/juegos', pathMatch: 'full' },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
    children: [
      {
        path: 'juegos',
        loadComponent: () =>
          import('./pages/juegos/juegos.page').then((m) => m.JuegosPage),
      },
      {
        path: 'tienda',
        loadComponent: () =>
          import('./pages/tienda/tienda.page').then((m) => m.TiendaPage),
      },
      {
        path: 'perfil',
        loadComponent: () =>
          import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
        children: [
          { path: '', redirectTo: 'configuracion', pathMatch: 'full' },
          {
            path: 'configuracion',
            loadComponent: () =>
              import('./pages/configuracion/configuracion.page').then(
                (m) => m.ConfiguracionPage,
              ),
          },
          {
            path: 'estadisticas',
            loadComponent: () =>
              import('./pages/estadisticas/estadisticas.page').then(
                (m) => m.EstadisticasPage,
              ),
          },
        ],
      },
    ],
  },

  {
    path: 'juego-detalle/:id',
    loadComponent: () =>
      import('./pages/juego-detalle/juego-detalle.page').then(
        (m) => m.JuegoDetallePage,
      ),
  },

  { path: '**', redirectTo: 'dashboard/juegos' },
];
