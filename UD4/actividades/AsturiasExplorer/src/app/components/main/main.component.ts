import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  noticiaTitulo = 'Nueva ruta recomendada';
  noticiaTexto = 'Explora una ruta costera con vistas espectaculares y paradas gastronómicas.';
}
