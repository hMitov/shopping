import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

export class RecipeService {

  selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A tasty schnitzel', 'The best meat in town - grab it now!', 'assets/schnitzel.jpeg',
      [new Ingredient('meat' ,5), new Ingredient('potatoes', 8)]),
    new Recipe('A burger', 'Definitely the best burger you could buy!', 'assets/burger.jpeg',
      [new Ingredient('tomatoes', 10), new Ingredient('onion', 7), new Ingredient('meat', 6)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() {}
}