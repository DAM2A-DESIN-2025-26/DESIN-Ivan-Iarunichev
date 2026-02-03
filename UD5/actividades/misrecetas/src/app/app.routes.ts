// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'recipes',
    pathMatch: 'full',
  },
  {
    path: 'recipes',
    loadComponent: () => import('./pages/recipes/recipes.page').then(m => m.RecipesPage)
  },
  {
    path: 'recipe-detail/:id',
    loadComponent: () => import('./pages/recipe-detail/recipe-detail.page').then(m => m.RecipeDetailPage)
  },
  {
    path: 'recipe-form',
    loadComponent: () => import('./pages/recipe-form/recipe-form.page').then(m => m.RecipeFormPage),
    canActivate: [authGuard]
  },
  {
    path: 'recipe-form/:id',
    loadComponent: () => import('./pages/recipe-form/recipe-form.page').then(m => m.RecipeFormPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  }
];
