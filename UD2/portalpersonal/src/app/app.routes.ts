import { Routes } from '@angular/router';
import { App } from './app';
import { Inicio } from './pages/inicio/inicio';
import { SobreMi } from './pages/sobre-mi/sobre-mi';
import { MisHabilidades } from './pages/mis-habilidades/mis-habilidades';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'sobre-mi',
    component: SobreMi
  },
  {
    path: 'mis-habilidades',
    component: MisHabilidades
  },
  {
    path: 'contacto',
    component: Contacto
  },
  {
    path: '**',
    redirectTo: ''
  }
];
