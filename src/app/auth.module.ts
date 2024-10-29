import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthComponent } from "./auth/auth.component";
import { SharedModule } from "./shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        RouterModule.forChild([{path: 'auth', component: AuthComponent}]),
        CommonModule,
    ]
})
export class AuthModule {

}