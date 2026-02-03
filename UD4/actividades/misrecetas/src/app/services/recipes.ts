import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Recipes, RecipesResponse, RecipeFormData } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private apiUrl = 'https://dummyjson.com/recipes';

  // Signal para mantener las recetas en memoria
  recipes = signal<Recipes[]>([]);

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(this.apiUrl).pipe(
      tap(response => this.recipes.set(response.recipes))
    );
  }

  getRecipeById(id: number): Observable<Recipes> {
    return this.http.get<Recipes>(`${this.apiUrl}/${id}`);
  }

  createRecipe(recipeData: RecipeFormData): Observable<Recipes> {
    // Convertir los strings de ingredientes e instrucciones a arrays
    const recipe = {
      name: recipeData.name,
      difficulty: recipeData.difficulty,
      prepTimeMinutes: recipeData.prepTimeMinutes,
      cookTimeMinutes: recipeData.cookTimeMinutes,
      servings: recipeData.servings || 1,
      ingredients: recipeData.ingredients.split(',').map(i => i.trim()),
      instructions: recipeData.instructions.split('\n').filter(i => i.trim()),
      tags: recipeData.tags ? recipeData.tags.split(',').map(t => t.trim()) : [],
      cuisine: 'Custom',
      caloriesPerServing: 0,
      userId: 1,
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      rating: 0,
      reviewCount: 0,
      mealType: ['Lunch']
    };

    return this.http.post<Recipes>(`${this.apiUrl}/add`, recipe).pipe(
      tap(newRecipe => {
        const current = this.recipes();
        this.recipes.set([newRecipe, ...current]);
      })
    );
  }

  updateRecipe(id: number, recipeData: RecipeFormData): Observable<Recipes> {
    const recipe = {
      name: recipeData.name,
      difficulty: recipeData.difficulty,
      prepTimeMinutes: recipeData.prepTimeMinutes,
      cookTimeMinutes: recipeData.cookTimeMinutes,
      servings: recipeData.servings || 1,
      ingredients: recipeData.ingredients.split(',').map(i => i.trim()),
      instructions: recipeData.instructions.split('\n').filter(i => i.trim()),
      tags: recipeData.tags ? recipeData.tags.split(',').map(t => t.trim()) : []
    };

    return this.http.put<Recipes>(`${this.apiUrl}/${id}`, recipe).pipe(
      tap(updatedRecipe => {
        const current = this.recipes();
        const index = current.findIndex(r => r.id === id);
        if (index !== -1) {
          current[index] = { ...current[index], ...updatedRecipe };
          this.recipes.set([...current]);
        }
      })
    );
  }

  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const current = this.recipes();
        this.recipes.set(current.filter(r => r.id !== id));
      })
    );
  }
}
