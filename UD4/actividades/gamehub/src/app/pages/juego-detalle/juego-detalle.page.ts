import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Juego } from '../../models/juego.model';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juego-detalle',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './juego-detalle.page.html',
})
export class JuegoDetallePage implements OnInit {
  juego?: Juego;

  constructor(
    private route: ActivatedRoute,
    private juegosService: JuegosService,
    private navController: NavController
  ) {}

  ngOnInit(): void {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = Number(idStr);

    if (!Number.isNaN(id)) {
      this.juego = this.juegosService.getById(id);
    }
  }

  volver(): void {
    this.navController.navigateBack('/dashboard/juegos');
  }

  irTienda(): void {
    this.navController.navigateForward('/dashboard/tienda');
  }
}
