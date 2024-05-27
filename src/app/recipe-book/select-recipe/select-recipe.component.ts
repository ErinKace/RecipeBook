import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-recipe',
  templateUrl: './select-recipe.component.html',
  styleUrls: ['./select-recipe.component.css']
})
export class SelectRecipeComponent implements OnInit {
  message: string = "Select a recipe from the list."

  constructor() { }

  ngOnInit(): void {
  }

}
