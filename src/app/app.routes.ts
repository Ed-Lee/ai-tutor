/*!
 * @license
 * Copyright 2025 Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import {Routes} from '@angular/router';
import { RecipeList } from './recipe-list/recipe-list';
import { RecipeDetail } from './recipe-detail/recipe-detail';
import { AddRecipe } from './add-recipe/add-recipe';

export const routes: Routes = [
    {
        path: '',
        component: RecipeList
    },
    {
        path: 'recipes/add',
        component: AddRecipe
    },
    {
        path: 'recipes/:id',
        component: RecipeDetail
    },
    
];
