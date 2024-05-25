import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;

  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppinglist() {
    this.shoppingService.addMultipleIngredients(this.recipe.ingredients);
  }

}
