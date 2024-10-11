import { Component, OnInit, Output } from '@angular/core';
import { ShoppingListService } from './shared/shopping-list.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-book';

  constructor(private shoppingListService: ShoppingListService, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

}
