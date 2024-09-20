import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe-book/recipe.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipeList();
        this.http.put('https://recipe-book-angular-cour-4e448-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response =>{
            console.log(response);
        });

    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://recipe-book-angular-cour-4e448-default-rtdb.firebaseio.com/recipes.json')
        .pipe(
            map(recipes=> {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }), tap(recipes => {
            this.recipeService.setRecipeList(recipes);
        })
    )}

}