import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { MisHabilidadesComponent } from './pages/mis-habilidades/mis-habilidades.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'mis-habilidades', component: MisHabilidadesComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' }
];