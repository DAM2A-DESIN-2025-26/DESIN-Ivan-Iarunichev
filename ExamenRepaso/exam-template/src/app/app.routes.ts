// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { ItemsListPage } from './pages/items-list/items-list.page';
import { ItemDetailPage } from './pages/item-detail/item-detail.page';
import { ItemFormPage } from './pages/item-form/item-form.page';
import { TareasListPage } from './pages/tareas-list/tareas-list.page';
import { LoginPage } from './pages/login/login.page';
import { PerfilPage } from './pages/perfil/perfil.page';
import { PerfilConfigPage } from './pages/perfil-config/perfil-config.page';
import { PerfilStatsPage } from './pages/perfil-stats/perfil-stats.page';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard/items', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: DashboardPage,
    children: [
      { path: 'items', component: ItemsListPage },
      { path: 'items/detalle/:id', component: ItemDetailPage },
      { path: 'items/form', component: ItemFormPage, canActivate: [AuthGuard] },
      { path: 'items/form/:id', component: ItemFormPage, canActivate: [AuthGuard] },

      { path: 'tareas', component: TareasListPage },

      {
        path: 'perfil',
        component: PerfilPage,
        children: [
          { path: 'configuracion', component: PerfilConfigPage },
          { path: 'estadisticas', component: PerfilStatsPage },
          { path: '', redirectTo: 'configuracion', pathMatch: 'full' }
        ]
      }
    ]
  },

  { path: 'login', component: LoginPage }
];
