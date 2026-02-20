// src/app/pages/item-detail/item-detail.page.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ItemsService } from '../../services/items';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule],
  templateUrl: './item-detail.page.html'
})
export class ItemDetailPage implements OnInit {
  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemsService.getItem(id).subscribe(item => this.item = item);
  }

  editar(): void {
    if (!this.item?.id) return;
    this.router.navigate(['/dashboard/items/form', this.item.id]);
  }

  volver(): void {
    this.router.navigate(['/dashboard/items']);
  }
}
