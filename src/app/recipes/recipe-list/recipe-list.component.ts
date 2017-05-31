import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'Desription of a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EwNAM6hqNfEA42JQSb0LZ416YQbVn38oqDtVltZC5cOkQWXt'),
    new Recipe('A test recipe', 'Desription of a test recipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-EwNAM6hqNfEA42JQSb0LZ416YQbVn38oqDtVltZC5cOkQWXt')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
