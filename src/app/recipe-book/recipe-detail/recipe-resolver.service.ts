import { Injectable } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { RecipeService } from "../recipe.service";

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {

    constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.getRecipeList();
        if (recipes.length === 0) {
            return this.dataStorageService.fetchRecipes();
        } else {
            return recipes;
        }
    }

}