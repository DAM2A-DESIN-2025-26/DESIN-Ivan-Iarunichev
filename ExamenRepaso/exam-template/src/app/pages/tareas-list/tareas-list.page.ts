import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TareasService } from '../../services/tareas';
import { TareaItemComponent } from '../../components/tarea-item/tarea-item.component';

@Component({
  selector: 'app-tareas-list',
  standalone: true,
  imports: [IonicModule, CommonModule, TareaItemComponent],
  templateUrl: './tareas-list.page.html'
})
export class TareasListPage {
  tareas = this.tareasService.tareas;

  constructor(private tareasService: TareasService) {}

  onToggle(id: number): void {
    this.tareasService.cambiarEstado(id);
  }
}
