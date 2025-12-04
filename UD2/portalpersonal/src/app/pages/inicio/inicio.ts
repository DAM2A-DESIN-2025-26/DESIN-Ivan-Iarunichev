import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class InicioComponent {
  visitas = signal(0);
  incrementar() { this.visitas.update(v => v + 1); }
}
