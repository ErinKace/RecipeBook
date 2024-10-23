import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { AuthGuard } from "./auth/auth.guard";
import { SelectRecipeComponent } from "./recipe-book/select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail/recipe-detail.component";
import { RecipeResolverService } from "./recipe-book/recipe-detail/recipe-resolver.service";

const recipeRoutes: Routes = [
    {path: 'recipes', component: RecipeBookComponent, canActivate: [AuthGuard], children: [
        {path: '', component: SelectRecipeComponent, pathMatch:'full'},
        {path: 'new', component: RecipeEditComponent},
        {path: ':id',component: RecipeDetailComponent, resolve: [RecipeResolverService]},
        {path: ':id/edit',component: RecipeEditComponent, resolve: [RecipeResolverService]},
      ]},
]

@NgModule({
    imports: [RouterModule.forChild(recipeRoutes)],
    exports: [RouterModule]

})
export class RecipesRoutingModule {}