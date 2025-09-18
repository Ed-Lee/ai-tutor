import { Component, computed, input, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [JsonPipe],
  templateUrl: './recipe-detail.html',
  styleUrl: './recipe-detail.css'
})
export class RecipeDetail {
  recipe = input<RecipeModel | undefined>();

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
