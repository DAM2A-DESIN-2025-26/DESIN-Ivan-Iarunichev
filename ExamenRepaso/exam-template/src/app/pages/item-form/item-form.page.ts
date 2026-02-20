// src/app/pages/item-form/item-form.page.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ItemsService } from '../../services/items';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './item-form.page.html'
})
export class ItemFormPage implements OnInit {
  form!: FormGroup;
  editMode = false;
  id?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private itemsService: ItemsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      difficulty: ['', Validators.required],
      prepTimeMinutes: [1, [Validators.required, Validators.min(1)]],
      cookTimeMinutes: [0, [Validators.required, Validators.min(0)]],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required]
    });

    this.id = Number(this.route.snapshot.paramMap.get('id'));
    if (this.id) {
      this.editMode = true;
      this.itemsService.getItem(this.id).subscribe(item => this.form.patchValue(item));
    }
  }

  guardar(): void {
    if (this.form.invalid) return;

    const item: Item = this.form.value;
    const obs = this.editMode && this.id
      ? this.itemsService.updateItem(this.id, item)
      : this.itemsService.addItem(item);

    obs.subscribe(() => this.router.navigate(['/dashboard/items']));
  }
}
