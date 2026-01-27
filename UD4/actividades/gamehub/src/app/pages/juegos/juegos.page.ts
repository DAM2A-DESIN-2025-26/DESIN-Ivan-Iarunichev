import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { Juego, Plataforma } from '../../models/juego.model';
import { JuegosService } from '../../services/juegos.service';
import { GamePreviewComponent } from '../../modals/game-preview/game-preview.component';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
  templateUrl: './juegos.page.html',
})
export class JuegosPage implements OnInit {
  juegos: Juego[] = [];

  constructor(
    private juegosService: JuegosService,
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    // Carga inicial
    this.juegos = this.juegosService.getAll();

    // Si llega state.plataforma desde Tienda, filtra automáticamente
    const plataforma = (history.state?.plataforma as Plataforma | undefined);
    if (plataforma) {
      this.juegos = this.juegosService.getByPlataforma(plataforma);
    }
  }

  verDetalle(juego: Juego): void {
    this.router.navigate(['/juego-detalle', juego.id]);
  }

  async vistaRapida(juego: Juego): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: GamePreviewComponent,
      componentProps: { juego }, // pasa objeto completo
    });
    await modal.present();
  }
}
