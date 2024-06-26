import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanges = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient("apples",5), new Ingredient("sugar", 3),
      ];
    
    public getIngredients() {
        return this.ingredients.slice();
      }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanges.next(this.ingredients.slice());
      }

    addMultipleIngredients(newIngredients: Ingredient[]) {
        this.ingredients.push(...newIngredients);
        this.ingredientsChanges.next(this.ingredients.slice());
    }
}