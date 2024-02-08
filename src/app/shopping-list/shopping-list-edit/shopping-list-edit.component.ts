import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('ingredientName', {static: true} )  ingredientName!: ElementRef;
  @ViewChild('ingredientAmount', {static: true}) ingredientAmount!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient() {
    const newName = this.ingredientName.nativeElement.value;
    const newAmount = this.ingredientAmount.nativeElement.value;
    this.shoppingListService.addNewIngredient(new Ingredient(newName, newAmount));
  }

}
