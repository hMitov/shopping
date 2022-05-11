import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameValue') nameRef !: ElementRef;
  @ViewChild('amountValue') amountRef !: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {}

  onAddItem() {
    // this.ingredientAdded.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
    this.shoppingListService.addItem(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }

}
