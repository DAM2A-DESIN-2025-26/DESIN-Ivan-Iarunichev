// src/app/pages/recipe-detail/recipe-detail.page.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { RecipesService } from '../../services/recipes';
import { Recipes } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipes | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadRecipe(parseInt(id));
    }
  }

  loadRecipe(id: number) {
    this.loading = true;
    this.recipesService.getRecipeById(id).subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipe:', error);
        this.loading = false;
        this.showErrorToast('Error al cargar la receta');
      }
    });
  }

  editRecipe() {
    if (this.recipe) {
      this.router.navigate(['/recipe-form', this.recipe.id]);
    }
  }

  async confirmDelete() {
    const alert = await this.alertController.create({
      header: 'Eliminar receta',
      message: `¿Estás seguro de que quieres eliminar "${this.recipe?.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteRecipe();
          }
        }
      ]
    });
    await alert.present();
  }

  deleteRecipe() {
    if (this.recipe) {
      this.recipesService.deleteRecipe(this.recipe.id).subscribe({
        next: async () => {
          const toast = await this.toastController.create({
            message: 'Receta eliminada correctamente',
            duration: 2000,
            color: 'success'
          });
          await toast.present();
          this.router.navigate(['/recipes']);
        },
        error: async (error) => {
          const toast = await this.toastController.create({
            message: 'Error al eliminar la receta',
            duration: 2000,
            color: 'danger'
          });
          await toast.present();
        }
      });
    }
  }

  async showErrorToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'danger'
    });
    await toast.present();
  }

  getDifficultyColor(difficulty: string): string {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'success';
      case 'medium':
        return 'warning';
      case 'hard':
        return 'danger';
      default:
        return 'medium';
    }
  }
}
