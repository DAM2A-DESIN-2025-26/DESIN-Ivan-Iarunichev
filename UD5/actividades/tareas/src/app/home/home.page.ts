import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList } from '@ionic/angular/standalone';
import { TareasService } from '../services/tareas';
import { TareaItemComponent } from '../components/tarea-item/tarea-item.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    TareaItemComponent
  ],
})
export class HomePage {
  tareasService = inject(TareasService);

  cambiarEstado(id: number) {
    this.tareasService.cambiarEstado(id);
  }

  get tareasPendientes(): number {
    return this.tareasService.tareas().filter(t => !t.completed).length;
  }

  get tareasTotal(): number {
    return this.tareasService.tareas().length;
  }
}
