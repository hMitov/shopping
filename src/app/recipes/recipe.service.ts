import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  recipes: Recipe[] = [
    new Recipe('A tasty schnitzel', 'The best meat in town - grab it now!', 'assets/schnitzel.jpeg',
      [ new Ingredient('meat', 5), new Ingredient('potatoes', 8) ]),
    new Recipe('A burger', 'Definitely the best burger you could buy!', 'assets/burger.jpeg',
      [ new Ingredient('tomatoes', 10), new Ingredient('onion', 7), new Ingredient('meat', 6) ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[ index ];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[ index ] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  onDeleteRecipe(index: number) {
    if(this.recipes.length - 1 >= index && index > -1) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
    }
  }

  deleteIngredient(indexOfRecipe: number, indexOfIngredient: number) {
    this.recipes[indexOfRecipe].ingredients.splice(indexOfIngredient, 1);
    this.recipesChanged.next(this.recipes.slice());
    console.log(this.recipes);
  }
}
