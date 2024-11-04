import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared.module";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListEditComponent,
    ],
    imports: [
        RouterModule.forChild([{path: '', component: ShoppingListComponent}]),
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