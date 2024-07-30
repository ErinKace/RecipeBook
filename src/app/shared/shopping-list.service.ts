import { Ingredient } from "./ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingredientsChanges = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient("apples",5), new Ingredient("sugar", 3),
      ];
    
    public getIngredients() {
        return this.ingredients.slice();
      }

    getIngredient(index: number): Ingredient {
      return this.ingredients[index];
    }

    addNewIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanges.next(this.ingredients.slice());
      }

    addMultipleIngredients(newIngredients: Ingredient[]) {
        this.ingredients.push(...newIngredients);
        this.ingredientsChanges.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingredient: Ingredient) {
      this.ingredients[index] = ingredient;
      this.ingredientsChanges.next(this.ingredients.slice());

    }
}