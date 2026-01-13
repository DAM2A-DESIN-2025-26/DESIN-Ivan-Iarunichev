import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  dni!: string;
  nombre!: string;
  apellidos!: string;
  email!: string;
  telefono!: string;
  activo!: boolean;
  direccion!: string;
  ciudad!: string;
  codigo_postal!: string | null;
  ruta_cv!: string | null;
  perfil!: string | null;
}
