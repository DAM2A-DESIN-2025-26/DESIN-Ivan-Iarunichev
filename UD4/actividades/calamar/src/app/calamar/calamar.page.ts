import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-calamar',
  templateUrl: './calamar.page.html',
  styleUrls: ['./calamar.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
    IonIcon,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonButton,
  ],
})
export class CalamarPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  async onOpenModal() {
    // Sustituto temporal del ModalController para que no falle la app
    alert('Aquí se debería abrir el modal Info');
  }
}
