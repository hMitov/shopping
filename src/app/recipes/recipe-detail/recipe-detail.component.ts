import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: [ './recipe-detail.component.css' ]
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe !: Recipe;
  id: number;
  recipe: Recipe;

  constructor(private shoppingListService: ShoppingListService,
              private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params[ 'id' ];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppingListService.addNewIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate([ 'edit' ], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.onDeleteRecipe(this.id);
    this.router.navigate([ '../' ], { relativeTo: this.route });
  }
}
