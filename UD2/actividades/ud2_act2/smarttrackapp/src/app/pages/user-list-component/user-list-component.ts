import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarUser();
  }

  cargarUser(): void {
    this.userService.getUser().subscribe({
      next: data => {
        console.log('Datos recibidos', data);
        this.user = data;
        this.cdr.detectChanges();
      },
      error: err => console.error('Error cargando user', err)
    });
  }
}
