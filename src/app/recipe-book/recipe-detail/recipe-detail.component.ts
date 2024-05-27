import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  recipeId!: number;

  constructor(private shoppingService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let recipeId = this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipeService.selectRecipeById(this.recipeId);
      this.recipeService.recipeSelected.subscribe(
        (recipe:Recipe)=> {
          this.recipe = recipe;
        }
      )
    })


  }

  onAddToShoppinglist() {
    this.shoppingService.addMultipleIngredients(this.recipe.ingredients);
  }

}
