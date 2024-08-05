import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
    private recipeList: Recipe[] = [
        new Recipe("French Toast", "Dunk your bread in egg milk and sugar and fry.", "https://www.kimscravings.com/wp-content/uploads/2020/07/Brioche-French-Toast-5-500x500.jpg", [new Ingredient("Bread", 6), new Ingredient("Eggs", 3), new Ingredient("Tablespoons Sugar", 3)]), 
        new Recipe("Spaghetti", "Bring water to a boil. Add noodles. Cook 10-11 minutes. Drain noodles. Stir in sauce", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDaNgXT3AnpK213Lo9AOmLvvgSwGydGoOp1fuTONEGdP2bx2xA36g4pMeGPlNt-9LI7E&usqp=CAU", [new Ingredient("Noodles", 20), new Ingredient("Bottle of Sauce", 1)])
      ];

    addNewRecipe(recipe: Recipe){
        this.recipeList.push(recipe);
    }

    public getRecipeList(): Recipe[] {
        return this.recipeList.slice();
    }

    // public selectRecipeById(id:number): boolean {
    //     for (let recipe of this.recipeList) {
    //         if (recipe.id === id) {
    //             this.recipeSelected.emit(recipe);
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    public selectRecipebyIndex(index: number): Recipe {
        return this.recipeList[index];
    }

    public addRecipe(recipe: Recipe) {
        this.recipeList.push(recipe);

    }

    public updateRecipe(index: number, recipe: Recipe) {
        this.recipeList.splice(index,1,recipe);

    }

}