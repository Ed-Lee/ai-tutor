import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-add-recipe',
  imports: [ReactiveFormsModule],
  templateUrl: './add-recipe.html',
  styleUrl: './add-recipe.css'
})
export class AddRecipe {
  fb = inject(FormBuilder);
  recipeService = inject(Recipe);
  protected readonly recipeForm  = this.fb.group({
    name: '',
    description: ''
  });

  

  doSubmit() {
    const recipe = this.recipeForm.value;
    if (!recipe.name || !recipe.description) return;
    
    console.log(recipe);
    this.recipeService.addRecipe(
      { 
        name: recipe.name,
      description: recipe.description,
      imgUrl: 'https://picsum.photos/id/488/300/200', 
      isFavorite: false, 
      ingredients: []
    });

    this.recipeForm.reset()
  }

  

}
