import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ItemsService } from '../../services/items';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './items-list.page.html'
})
export class ItemsListPage {
  items = this.itemsService.items;

  constructor(
    private itemsService: ItemsService,
    private router: Router
  ) {}

  recargar(event?: any): void {
    this.itemsService.getItems();
    if (event) event.target.complete();
  }

  irDetalle(item: Item): void {
    this.router.navigate(['/dashboard/items/detalle', item.id]);
  }

  irCrear(): void {
    this.router.navigate(['/dashboard/items/form']);
  }

  editar(item: Item): void {
    this.router.navigate(['/dashboard/items/form', item.id]);
  }

  borrar(item: Item): void {
    if (!item.id) return;
    if (confirm(`¿Borrar "${item.name}"?`)) {
      this.itemsService.deleteItem(item.id).subscribe(() => {
        this.itemsService.removeFromSignal(item.id!);
      });
    }
  }
}
