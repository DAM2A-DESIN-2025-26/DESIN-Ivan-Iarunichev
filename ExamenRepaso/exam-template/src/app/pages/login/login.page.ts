// src/app/pages/login/login.page.ts
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './login.page.html'
})
export class LoginPage {
  username = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  login(): void {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard/items']),
      error: () => alert('Login incorrecto')
    });
  }

  logout(): void {
    this.auth.logout();
  }
}
