import { Injectable, computed, signal } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';
import { RecipeModel } from './models';

@Injectable({
  providedIn: 'root',
})
export class Recipe {
  // 1. 將食譜陣列改為一個私有的可寫入 signal
  private readonly recipesSignal = signal<RecipeModel[]>(MOCK_RECIPES);

  // 2. 建立一個公開的、唯讀的衍生 signal，讓外部元件可以安全地讀取
  public readonly recipes = computed(() => this.recipesSignal());

  // 3. 建立一個衍生 signal，用來計算下一個可用的 ID
  private readonly nextId = computed(() => {
    const allRecipes = this.recipesSignal();
    return allRecipes.length > 0
      ? Math.max(...allRecipes.map(r => r.id ?? 0)) + 1
      : 1;
  });

  constructor() {}

  // 5. 修改 addRecipe 方法，使用 .update() 來更新 signal
  addRecipe(recipe: Omit<RecipeModel, 'id'>) {
    const newRecipe = {
      ...recipe,
      id: this.nextId(), // 使用計算出來的下一個 ID
    };
    this.recipesSignal.update(currentRecipes => [...currentRecipes, newRecipe]);
  }

  getRecipeById(id: number): RecipeModel | undefined {
    return this.recipes().find(recipe => recipe.id === id);
  }
}
