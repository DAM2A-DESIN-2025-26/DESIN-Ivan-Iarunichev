import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { RecipesService } from '../../services/recipes';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.page.html',
  styleUrls: ['./recipe-form.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class RecipeFormPage implements OnInit {
  recipeForm!: FormGroup;
  isEditMode = false;
  recipeId: number | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private recipesService: RecipesService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.initForm();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.recipeId = parseInt(id);
      this.loadRecipe(this.recipeId);
    }
  }

  initForm() {
    this.recipeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      difficulty: ['', Validators.required],
      prepTimeMinutes: [1, [Validators.required, Validators.min(1)]],
      cookTimeMinutes: [0, [Validators.required, Validators.min(0)]],
      servings: [4, Validators.min(1)],
      ingredients: ['', Validators.required],
      instructions: ['', Validators.required],
      tags: ['']
    });
  }

  loadRecipe(id: number) {
    this.loading = true;
    this.recipesService.getRecipeById(id).subscribe({
      next: (recipe: Recipe) => {
        this.recipeForm.patchValue({
          name: recipe.name,
          difficulty: recipe.difficulty,
          prepTimeMinutes: recipe.prepTimeMinutes,
          cookTimeMinutes: recipe.cookTimeMinutes,
          servings: recipe.servings,
          ingredients: recipe.ingredients.join(', '),
          instructions: recipe.instructions.join('\n'),
          tags: recipe.tags.join(', ')
        });
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading recipe:', error);
        this.loading = false;
        this.showToast('Error al cargar la receta', 'danger');
      }
    });
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      this.loading = true;
      const formData = this.recipeForm.value;

      if (this.isEditMode && this.recipeId) {
        this.recipesService.updateRecipe(this.recipeId, formData).subscribe({
          next: async () => {
            await this.showToast('Receta actualizada correctamente', 'success');
            this.router.navigate(['/recipe-detail', this.recipeId]);
          },
          error: async (error) => {
            console.error('Error updating recipe:', error);
            await this.showToast('Error al actualizar la receta', 'danger');
            this.loading = false;
          }
        });
      } else {
        this.recipesService.createRecipe(formData).subscribe({
          next: async (recipe) => {
            await this.showToast('Receta creada correctamente', 'success');
            this.router.navigate(['/recipes']);
          },
          error: async (error) => {
            console.error('Error creating recipe:', error);
            await this.showToast('Error al crear la receta', 'danger');
            this.loading = false;
          }
        });
      }
    }
  }

  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}
