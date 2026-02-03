import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { RecipesService } from '../../services/recipes';
import { AuthService } from '../../services/auth';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class RecipesPage implements OnInit {
  recipes = this.recipesService.recipes;
  loading = false;
  isLoggedIn = this.authService.isAuthenticated;

  constructor(
    private recipesService: RecipesService,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.loading = true;
    this.recipesService.getAllRecipes().subscribe({
      next: () => {
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipes:', error);
        this.loading = false;
      }
    });
  }

  handleRefresh(event: any) {
    this.recipesService.getAllRecipes().subscribe({
      next: () => {
        event.target.complete();
      },
      error: () => {
        event.target.complete();
      }
    });
  }

  navigateToCreate() {
    if (this.isLoggedIn()) {
      this.router.navigate(['/recipe-form']);
    } else {
      this.showLoginRequiredAlert();
    }
  }

  async showLoginRequiredAlert() {
    const alert = await this.alertController.create({
      header: 'Autenticación requerida',
      message: 'Debes iniciar sesión para crear recetas',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Iniciar sesión',
          handler: () => {
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  navigateToLogin() {
    if (this.isLoggedIn()) {
      this.logout();
    } else {
      this.router.navigate(['/login']);
    }
  }

  async logout() {
    const alert = await this.alertController.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Cerrar sesión',
          handler: () => {
            this.authService.logout();
            const toast = this.toastController.create({
              message: 'Sesión cerrada',
              duration: 2000,
              color: 'medium'
            });
            toast.then(t => t.present());
          }
        }
      ]
    });
    await alert.present();
  }

  async confirmDelete(event: Event, recipe: Recipe) {
    event.stopPropagation();

    const alert = await this.alertController.create({
      header: 'Eliminar receta',
      message: `¿Estás seguro de que quieres eliminar "${recipe.name}"?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deleteRecipe(recipe.id);
          }
        }
      ]
    });
    await alert.present();
  }

  deleteRecipe(id: number) {
    this.recipesService.deleteRecipe(id).subscribe({
      next: async () => {
        const toast = await this.toastController.create({
          message: 'Receta eliminada correctamente',
          duration: 2000,
          color: 'success'
        });
        await toast.present();
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
