/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected recipes = MOCK_RECIPES;

  protected readonly title = signal('智慧食譜盒');

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
