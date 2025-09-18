import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';
import { RecipeDetail } from "../recipe-detail/recipe-detail";

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected recipes = MOCK_RECIPES;

  protected readonly recipe = signal<RecipeModel | undefined>(MOCK_RECIPES[0]);
  
  

  show(recipe: RecipeModel) {
    this.recipe.set(recipe);
  }

}
