import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
  IonButtons, IonMenuButton, IonIcon, ToastController
} from '@ionic/angular/standalone';
import { NotificacionService } from '../../services/notificacion';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  standalone: true,
  imports: [
    CommonModule, TranslateModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonMenuButton, IonIcon,
  ],
})
export class NotificacionesPage {
  constructor(
    private notificacionService: NotificacionService,
    private translate: TranslateService,
    private toastCtrl: ToastController,
  ) {
    addIcons({ notificationsOutline });
  }

  async enviarNotificacion() {
    try {
      const titulo = await this.translate.get('NOTIF.NOTIF_TITLE').toPromise();
      const cuerpo = await this.translate.get('NOTIF.NOTIF_BODY').toPromise();
      await this.notificacionService.enviarNotificacion(titulo, cuerpo);
      const toast = await this.toastCtrl.create({
        message: '✅ Notificación enviada',
        duration: 2000,
        color: 'success',
      });
      await toast.present();
    } catch (e: any) {
      const toast = await this.toastCtrl.create({
        message: '❌ ' + e.message,
        duration: 2000,
        color: 'danger',
      });
      await toast.present();
    }
  }
}
