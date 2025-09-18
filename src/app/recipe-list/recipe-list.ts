import { Component, computed, inject, signal } from '@angular/core';
import { RecipeModel } from '../models';
import { RecipeDetail } from "../recipe-detail/recipe-detail";
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  imports: [RecipeDetail,FormsModule],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.css'
})
export class RecipeList {
  recipeService = inject(Recipe);
  protected recipes = this.recipeService.getRecipes();

  protected readonly searchTerm = signal<string>('');

  protected readonly filteredRecipes = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.recipes.filter(recipe => recipe.name.toLowerCase().includes(search));
  });

  protected readonly recipe = signal<RecipeModel | undefined>(this.recipes[0]);
  
  

  selectRecipe(recipe: RecipeModel) {
    this.recipe.set(recipe);
  }

}
