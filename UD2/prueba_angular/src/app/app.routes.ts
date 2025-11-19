import { Routes } from '@angular/router';
import { App } from './app';
import { Counter } from './pages/counter/counter';

export const routes: Routes = [
  {
    path: "",
    component: App
  },
  {
    path: "counter",
    component: Counter
  }
];
