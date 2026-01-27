import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, AlertController, NavController } from '@ionic/angular';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
  templateUrl: './configuracion.page.html',
})
export class ConfiguracionPage implements OnInit {
  // Para “alerta inline”
  showNormasInline = false;

  form = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    edad: [null as number | null, [Validators.min(13), Validators.max(99)]],
    notificaciones: [false],
  });

  constructor(
    private fb: FormBuilder,
    private alertCtrl: AlertController,
    private navController: NavController
  ) {}

  ngOnInit(): void {}

  async activarNotificaciones(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Preferencias',
      message: 'Notificaciones de lanzamientos activadas',
      buttons: ['OK'],
    });
    await alert.present();
  }

  normasDeUsoInline(): void {
    this.showNormasInline = true;
  }

  volverAPerfil(): void {
    // Requisito: usar pop()
    this.navController.pop();
  }

  async guardarPerfil(): Promise<void> {
    if (this.form.invalid) return;

    const alert = await this.alertCtrl.create({
      header: 'Perfil guardado',
      message: `<pre>${JSON.stringify(this.form.value, null, 2)}</pre>`,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
