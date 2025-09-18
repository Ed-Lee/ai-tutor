import { Component, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from '../mock-recipes';
import { RecipeModel } from '../models';
import { JsonPipe } from '@angular/common';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail,FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  protected recipes = MOCK_RECIPES;

  protected readonly searchTerm = signal<string>('');

  protected readonly filteredRecipes = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(search));
  });

  protected readonly recipe = signal<RecipeModel | undefined>(MOCK_RECIPES[0]);
  
  

  selectRecipe(recipe: RecipeModel) {
    this.recipe.set(recipe);
  }

}
