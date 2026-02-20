import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil-stats',
  templateUrl: './perfil-stats.page.html',
  styleUrls: ['./perfil-stats.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilStatsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
