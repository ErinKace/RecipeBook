import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  recipeId!: number;

  constructor(private shoppingService: ShoppingListService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let recipeId = this.route.params.subscribe((params: Params) => {
      this.recipeId = +params['id'];
      this.recipe = this.recipeService.selectRecipebyIndex(this.recipeId);
    });


  }

  onAddToShoppinglist() {
    this.shoppingService.addMultipleIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})

  }

  onDeleteRecipe() {
    if (confirm("Are you sure you want to delete this recipe?")) {
      this.recipeService.deleteRecipe(this.recipeId);
      this.router.navigate(['recipes']);
    }
  }

}
