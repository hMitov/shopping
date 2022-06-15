import { Ingredient } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addItem(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[ index ];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[ index ] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addNewIngredients(ingredientsForBuying: Ingredient[]) {
    ingredientsForBuying.forEach(ingredient => {this.addItem(ingredient);});
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}
