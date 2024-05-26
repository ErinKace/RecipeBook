import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
    selector: 'app-recipe-book',
    templateUrl: './recipe-book.component.html',
    styleUrls: ['./recipe-book.component.css'],
    // providers: [RecipeService],
})

export class RecipeBookComponent implements OnInit, OnChanges {
    recipeToDisplay!: Recipe;

    constructor(private recipeService: RecipeService) {
    }


    ngOnInit(): void {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe)=>{
                this.recipeToDisplay = recipe;
            }
        )
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.recipeService.recipeSelected.subscribe(
            (recipe: Recipe)=>{
                this.recipeToDisplay = recipe;
            }
        )
    }

}