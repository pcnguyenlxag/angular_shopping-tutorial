import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

export interface RecipeManager {
  label: string;
  icon: string;
  command?: (event?: any) => void;
}

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeManagers: RecipeManager[];

  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
    this.recipeManagers = [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          // this.update();
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
          // this.delete();
      }},
  ];
  }

}
