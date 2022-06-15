import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {
  editForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.editForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, Validators.required)
    });

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.editForm.setValue({
          'name' : this.editedItem.name,
          'amount' : this.editedItem.amount
        });
      }
    );
  }

  onSubmit() {
    const newIngredient = new Ingredient(this.editForm.get('name').value, this.editForm.get('amount').value);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);
    } else {
      this.shoppingListService.addItem(newIngredient);
    }
    this.editMode = false;
    this.editForm.reset();
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.editForm.reset();
  }
}
