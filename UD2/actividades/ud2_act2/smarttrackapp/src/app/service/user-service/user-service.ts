import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../model/user/user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private apiUrl = 'https://daw2a26-1.iesmontenaranco.com/api/usuarios';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
