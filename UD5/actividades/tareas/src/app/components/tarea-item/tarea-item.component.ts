import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Tarea } from '../../models/tarea.interface';

@Component({
  selector: 'app-tarea-item',
  templateUrl: './tarea-item.component.html',
  styleUrls: ['./tarea-item.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class TareaItemComponent {
  @Input() tarea!: Tarea;
  @Output() cambiarEstadoTarea = new EventEmitter<number>();

  onCheckboxChange(event: any) {
    this.cambiarEstadoTarea.emit(this.tarea.id);
  }
}
