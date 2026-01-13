import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../service/user-service/user-service';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-add-component.html',
  styleUrls: ['./user-add-component.css']
})
export class UserAddComponent implements OnInit {
  newUser = {
    dni: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    fechaNacimiento: ''
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  addUser(): void {
    this.userService.createUser(this.newUser).subscribe({
      next: (response) => {
        console.log('Usuario creado exitosamente:', response);
        this.router.navigate(['/usuario/lista']);
      },
      error: (error) => {
        console.error('Error al crear usuario:', error);
        alert('Error al crear el usuario. Verifica los datos.');
      }
    });
  }
  cancel(): void {
    this.router.navigate(['/usuario/lista']);
  }
}
