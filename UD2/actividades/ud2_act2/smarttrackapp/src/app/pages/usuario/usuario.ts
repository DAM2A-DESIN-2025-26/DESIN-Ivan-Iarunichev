import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-usuario',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

}
