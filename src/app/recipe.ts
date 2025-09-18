import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root'
})
export class Recipe {

  private recipes = MOCK_RECIPES;

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipeById(id: number): RecipeModel | undefined {
    return this.recipes.find(recipe => recipe.id === id);
  }

}
