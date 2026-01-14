import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service/user-service';
import { User } from '../../model/user/user';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent implements OnInit {
  user: User[] = [];

  constructor(
    private userService: UserService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.user = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error cargando usuarios', err);
        alert('Error cargando usuarios');
      },
    });
  }

  editUser(dni: string): void {
    this.router.navigate(['/usuario/editar', dni]);
  }

  toggleUserStatus(dni: string): void {
    const usuario = this.user.find(u => u.dni === dni);

    if (!usuario) {
      alert('Usuario no encontrado');
      return;
    }

    usuario.activo = !usuario.activo;

    this.userService.updateUser(dni, usuario).subscribe({
      next: () => {
        const estado = usuario.activo ? 'activado' : 'deshabilitado';
        alert(`Usuario ${estado} correctamente`);
        this.cargarUser();
      },
      error: (err) => {
        console.error('Error cambiando estado:', err);
        alert('Error: El backend no acepta PUT. Consulta con tu profesor.');
        this.cargarUser();
      },
    });
  }

  deleteUser(dni: string): void {
    if (!confirm('ADVERTENCIA: Eliminación permanente. ¿Continuar?')) {
      return;
    }

    this.userService.deleteUser(dni).subscribe({
      next: () => {
        alert('Usuario eliminado correctamente');
        this.cargarUser();
      },
      error: (err) => {
        alert('No se puede eliminar. El usuario tiene datos relacionados.\n\nSOLUCIÓN: Usa "Deshabilitar" en su lugar.');
      },
    });
  }
}
