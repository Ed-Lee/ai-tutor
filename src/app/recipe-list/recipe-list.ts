import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Recipe } from '../recipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  imports: [FormsModule, RouterLink],
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


}
