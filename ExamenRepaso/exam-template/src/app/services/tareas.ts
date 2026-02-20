// src/app/services/tareas.service.ts
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea.model';

@Injectable({ providedIn: 'root' })
export class TareasService {
  tareas = signal<Tarea[]>([]);
  private url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {
    this.getTareas();
  }

  getTareas(): void {
    this.http.get<Tarea[]>(this.url).subscribe(data => {
      this.tareas.set(data.slice(0, 20));
    });
  }

  cambiarEstado(id: number): void {
    this.tareas.update(lista =>
      lista.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  }
}
