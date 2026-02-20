// src/app/services/items.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  private baseUrl = 'https://dummyjson.com/recipes';
  items = signal<Item[]>([]);

  constructor(private http: HttpClient) {
    this.getItems();
  }

  getItems(): void {
    this.http.get<{ recipes: Item[] }>(this.baseUrl)
      .subscribe(res => this.items.set(res.recipes));
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.baseUrl}/${id}`);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.baseUrl}/add`, item);
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.baseUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  removeFromSignal(id: number): void {
    this.items.update(list => list.filter(i => i.id !== id));
  }
}
