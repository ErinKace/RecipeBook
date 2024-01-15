import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipeList: Recipe[] = [
    new Recipe("French Toast", "Dunk your bread in egg milk and sugar and fry.", "https://www.kimscravings.com/wp-content/uploads/2020/07/Brioche-French-Toast-5-500x500.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
