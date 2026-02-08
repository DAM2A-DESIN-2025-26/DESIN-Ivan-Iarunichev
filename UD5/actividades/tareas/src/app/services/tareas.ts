import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  public tareas = signal<Tarea[]>([]);

  constructor(private http: HttpClient) {
    this.getTareas();
  }

  getTareas() {
    this.http.get<Tarea[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.tareas.set(data);
      },
      error: (error) => {
        console.error('Error al obtener tareas:', error);
      }
    });
  }

  public cambiarEstado(id: number) {
    this.tareas.update(lista =>
      lista.map(t =>
        t.id === id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  }
}
