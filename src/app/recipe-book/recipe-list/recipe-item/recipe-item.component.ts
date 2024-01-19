import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(recipe: Recipe) {
    this.recipeClicked.emit(recipe);
  }

}
