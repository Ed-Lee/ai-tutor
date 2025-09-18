import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  imports: [JsonPipe],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected recipes = MOCK_RECIPES;

  protected readonly recipe = signal<RecipeModel | undefined>(MOCK_RECIPES[0]);
  
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

  show(recipe: RecipeModel) {
    this.recipe.set(recipe);
  }

}
