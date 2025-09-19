import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-recipe-detail',
  imports: [MatButtonModule],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  route = inject(ActivatedRoute);
  recipeService = inject(Recipe);

  protected readonly recipe = computed(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.recipeService.getRecipeById(id);
  });

  protected readonly servings = signal(1);

  protected readonly ingredients = computed(() => {
    const recipe = this.recipe();
    const servings = this.servings();
    if (!recipe) {
      return [];
    }
    return recipe.ingredients.map(ingredient => ({
      ...ingredient,
      quantity: ingredient.quantity * servings,
    }));
  });

  decreaseServings() {
    this.servings.update(servings => servings - 1);
  }

  increaseServings() {
    this.servings.update(servings => servings + 1);
  }

}
