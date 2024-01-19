import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css']
})

export class RecipeBookComponent implements OnInit {
    recipeToDisplay!: Recipe;

    constructor() {
    }


    ngOnInit(): void {
    }

    recipeSelected(recipe: Recipe) {
        this.recipeToDisplay = recipe
    }

}