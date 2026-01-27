import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Juego } from '../../models/juego.model';

@Component({
  selector: 'app-game-preview',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './game-preview.component.html',
})
export class GamePreviewComponent {
  @Input() juego!: Juego;

  constructor(private modalCtrl: ModalController) {}

  cerrar(): void {
    this.modalCtrl.dismiss();
  }
}
