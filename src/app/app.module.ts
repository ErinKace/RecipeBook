import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shared/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { AuthIntercepterService } from './auth/auth-intercetor';
import { RecipesModule } from './recipe-book/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [ShoppingListService, RecipeService, {provide: HTTP_INTERCEPTORS, useClass: AuthIntercepterService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
