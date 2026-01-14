import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../model/user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'https://daw2a26-1.iesmontenaranco.com/api/usuarios';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  getUserByDni(dni: string): Observable<User> {
    return this.http.get<User[]>(this.baseUrl).pipe(
      map(users => {
        const user = users.find(u => u.dni === dni);
        if (!user) {
          throw new Error(`Usuario con DNI ${dni} no encontrado`);
        }
        return user;
      }),
      catchError(err => {
        console.error('Error obteniendo usuario por DNI:', err);
        return throwError(() => err);
      })
    );
  }

  createUser(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(this.baseUrl, user, { headers });
  }

  updateUser(dni: string, user: User): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/${dni}`, user, {
      headers,
      responseType: 'text' as 'json'
    });
  }

  deleteUser(dni: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${dni}`, {
      responseType: 'text' as 'json'
    });
  }
}
