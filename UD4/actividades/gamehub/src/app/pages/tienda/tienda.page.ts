import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Plataforma } from '../../models/juego.model';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './tienda.page.html',
})
export class TiendaPage {
  plataformas: Plataforma[] = ['PC', 'PS5', 'Xbox', 'Switch'];

  constructor(private router: Router) {}

  irAPlataforma(plataforma: Plataforma): void {
    this.router.navigate(['/dashboard/juegos'], { state: { plataforma } });
  }
}
