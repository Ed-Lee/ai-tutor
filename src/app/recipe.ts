import { Injectable } from '@angular/core';
import { MOCK_RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class Recipe {

  private recipes = MOCK_RECIPES;

  constructor() { }

  getRecipes() {
    return this.recipes;
  }
}
