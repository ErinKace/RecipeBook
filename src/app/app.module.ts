import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shared/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { SelectRecipeComponent } from './recipe-book/select-recipe/select-recipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AuthIntercepterService } from './auth/auth-intercetor';
import { RecipesModule } from './recipes.module';
import { ShoppingListModule } from './shopping-list.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SelectRecipeComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
