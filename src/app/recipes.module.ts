import { NgModule } from "@angular/core";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeListComponent } from "./recipe-book/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./recipe-book/recipe-list/recipe-item/recipe-item.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "./shared.module";
import { SelectRecipeComponent } from "./recipe-book/select-recipe/select-recipe.component";

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeEditComponent,
        SelectRecipeComponent,
    ],
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
    ]
})
export class RecipesModule {}