import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonSegment, IonSegmentButton, IonLabel,
  IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonBadge, IonButtons, IonMenuButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.page.html',
  standalone: true,
  imports: [
    CommonModule, FormsModule, TranslateModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonSegment, IonSegmentButton, IonLabel,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonBadge, IonButtons, IonMenuButton,
  ],
})
export class IdiomaPage {
  idiomaActual: string;

  constructor(private translate: TranslateService) {
    this.idiomaActual = this.translate.currentLang || 'es';
  }

  cambiarIdioma(event: any) {
    const lang = event.detail.value;
    this.translate.use(lang);
    this.idiomaActual = lang;
  }
}
