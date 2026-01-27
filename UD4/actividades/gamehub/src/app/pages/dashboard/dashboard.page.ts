import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { AboutGamehubModalComponent } from '../../models/about-gamehub-modal/about-gamehub-modal.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  constructor(private modalCtrl: ModalController) {}

  async openAboutModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: AboutGamehubModalComponent,
    });
    await modal.present();
  }
}
