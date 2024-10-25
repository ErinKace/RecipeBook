import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";
import { Route, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        RouterModule.forChild([{path: 'shopping-list', component: ShoppingListComponent}]),
        SharedModule,
        FormsModule,
    ],
    exports: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ]
})
export class ShoppingListModule {    
}