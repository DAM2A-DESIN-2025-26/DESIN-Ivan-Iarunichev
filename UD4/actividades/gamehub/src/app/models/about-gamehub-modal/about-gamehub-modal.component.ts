import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about-gamehub-modal',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './about-gamehub-modal.component.html',
})
export class AboutGamehubModalComponent {
  constructor(private modalCtrl: ModalController) {}

  cerrar(): void {
    this.modalCtrl.dismiss();
  }
}
