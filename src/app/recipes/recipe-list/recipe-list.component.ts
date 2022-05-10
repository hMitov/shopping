import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://thejournaloffranchise.com/wp-content/uploads/2019/04/recipe-696x377.png'),
    new Recipe('A Test Recipe', 'This is simply a test',
      'https://thejournaloffranchise.com/wp-content/uploads/2019/04/recipe-696x377.png')


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
