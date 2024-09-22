import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { SelectRecipeComponent } from './recipe-book/select-recipe/select-recipe.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipe-book/recipe-detail/recipe-resolver.service';
import { AuthComponent } from './auth/auth.component';

const appRoutes : Routes = [
  {path: '', redirectTo:'/recipes', pathMatch:'full'},
  {path: 'recipes', component: RecipeBookComponent, children: [
    {path: '', component: SelectRecipeComponent, pathMatch:'full'},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id',component: RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit',component: RecipeEditComponent, resolve: [RecipeResolverService]},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
