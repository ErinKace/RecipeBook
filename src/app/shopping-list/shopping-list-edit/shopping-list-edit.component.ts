import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientName', {static: true} )  ingredientName!: ElementRef;
  @ViewChild('ingredientAmount', {static: true}) ingredientAmount!: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  addIngredient() {
    let ingredient = new Ingredient(this.ingredientName.nativeElement.value, this.ingredientAmount.nativeElement.value);
    this.addedIngredient.emit(ingredient);
  }

}
