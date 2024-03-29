import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    public recipeSelected = new EventEmitter<Recipe>();
    private recipeList: Recipe[] = [
        new Recipe("French Toast", "Dunk your bread in egg milk and sugar and fry.", "https://www.kimscravings.com/wp-content/uploads/2020/07/Brioche-French-Toast-5-500x500.jpg"), new Recipe("Spaghetti", "Bring water to a boil. Add noodles. Cook 10-11 minutes. Drain noodles. Stir in sauce", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDaNgXT3AnpK213Lo9AOmLvvgSwGydGoOp1fuTONEGdP2bx2xA36g4pMeGPlNt-9LI7E&usqp=CAU")
      ];

    addNewRecipe(recipe: Recipe){
        this.recipeList.push(recipe);
    }

    public getRecipeList(): Recipe[] {
        return this.recipeList.slice();
    }

}