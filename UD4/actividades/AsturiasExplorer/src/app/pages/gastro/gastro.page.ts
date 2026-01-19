import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gastro',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './gastro.page.html',
  styleUrls: ['./gastro.page.scss'],
})
export class GastroPage {
  tituloPagina = 'Gastronomía';
  platoTipico = 'Fabada asturiana';
}
