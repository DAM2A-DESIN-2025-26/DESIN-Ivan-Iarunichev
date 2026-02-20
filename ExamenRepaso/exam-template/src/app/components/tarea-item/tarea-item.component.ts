// src/app/components/tarea-item/tarea-item.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Tarea } from '../../models/tarea.model';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './tarea-item.component.html'
})
export class TareaItemComponent {
  @Input() tarea!: Tarea;
  @Output() toggle = new EventEmitter<number>();

  onChange(): void {
    this.toggle.emit(this.tarea.id);
  }
}
