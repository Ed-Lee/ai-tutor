/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected recipes = MOCK_RECIPES;

  protected readonly title = signal('智慧食譜盒');

  protected readonly recipe = signal<RecipeModel | undefined>(MOCK_RECIPES[0]);
  
  show(recipe: RecipeModel) {
    this.recipe.set(recipe);
  }


}
