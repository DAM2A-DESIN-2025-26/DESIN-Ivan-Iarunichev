import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton,
  IonButtons, IonMenuButton, IonImg, IonIcon
} from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { addIcons } from 'ionicons';
import { cameraOutline } from 'ionicons/icons';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  standalone: true,
  imports: [
    CommonModule, TranslateModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonButtons, IonMenuButton, IonImg, IonIcon,
  ],
})
export class CamaraPage {
  fotoUrl: string | null = null;

  constructor() { addIcons({ cameraOutline }); }

  async hacerFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      this.fotoUrl = image.dataUrl ?? null;
    } catch (e) {
      console.error('Error al hacer foto:', e);
    }
  }
}
