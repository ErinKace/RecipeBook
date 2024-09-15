import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe-book/recipe.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipeList();
        this.http.put('https://recipe-book-angular-cour-4e448-default-rtdb.firebaseio.com/')

    }


}