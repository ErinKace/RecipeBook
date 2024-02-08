import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";
export class ShoppingListService {
    ingredientsChanges = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("apples",5), new Ingredient("sugar", 3),
      ];
    
    public getIngredients() {
        return this.ingredients.slice();
      }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanges.emit(this.ingredients.slice());
      }
}