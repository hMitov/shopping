import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://thejournaloffranchise.com/wp-content/uploads/2019/04/recipe-696x377.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
