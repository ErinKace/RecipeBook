import { Component, Output } from '@angular/core';
import { ShoppingListService } from './shared/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-book';
  loadedFeature: string = 'recipe';

  constructor(private shoppingListService: ShoppingListService) {

  }


  onNavigate(feature:string) {
    this.loadedFeature = feature;
  }

}
