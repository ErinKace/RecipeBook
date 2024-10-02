import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe-book/recipe.service";
import { Recipe } from "../recipe-book/recipe.model";
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipeList();
        this.http.put('https://recipe-book-angular-cour-4e448-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response =>{
            console.log(response);
        });

    }

    fetchRecipes() {
        return this.authService.user.pipe(take(1), 
        exhaustMap(user => {
        return this.http.get<Recipe[]>('https://recipe-book-angular-cour-4e448-default-rtdb.firebaseio.com/recipes.json', {params: new HttpParams().set('auth', user.token)});
        }),
        map(recipes=> {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }), tap(recipes => {
            this.recipeService.setRecipeList(recipes);
        })
    );
}

}