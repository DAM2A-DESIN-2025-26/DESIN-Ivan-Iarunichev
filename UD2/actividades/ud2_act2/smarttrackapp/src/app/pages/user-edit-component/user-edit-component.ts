import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user-service/user-service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-user-edit-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit-component.html',
  styleUrls: ['./user-edit-component.css'],
})
export class UserEditComponent implements OnInit {
  editMode: boolean = false;
  originalDni: string = '';

  user: User = {
    dni: '',
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
    fechaNacimiento: '',
    activo: true,
    direccion: '',
    ciudad: '',
    codigo_postal: null,
    ruta_cv: null,
    perfil: null,
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const dni = params.get('dni');

      if (dni) {
        this.editMode = true;
        this.originalDni = dni;
        this.loadUser(dni);
      }
    });
  }

  loadUser(dni: string): void {
    this.userService.getUserByDni(dni).subscribe({
      next: (data) => {
        this.user = { ...data };

        if (this.user.fechaNacimiento) {
          this.user.fechaNacimiento = this.user.fechaNacimiento.split('T')[0];
        }
      },
      error: (err) => {
        alert('Error cargando usuario');
        this.router.navigate(['/usuario/lista']);
      },
    });
  }

  save(): void {
    if (this.editMode) {
      this.userService.updateUser(this.originalDni, this.user).subscribe({
        next: () => {
          alert('Usuario actualizado correctamente');
          this.router.navigate(['/usuario/lista']);
        },
        error: () => {
          alert(
            'ERROR: No se pudo actualizar.'
          );
        },
      });
    } else {
      this.userService.createUser(this.user).subscribe({
        next: () => {
          alert('Usuario creado correctamente');
          this.router.navigate(['/usuario/lista']);
        },
        error: (err) => {
          alert('Error creando usuario');
        },
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/usuario/lista']);
  }
}
