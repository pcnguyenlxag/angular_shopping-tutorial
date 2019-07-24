import { RecipeService } from './../recipe.service';
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
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeManagers = [
      { label: 'To shopping list', icon: 'pi pi-list', command: () => {
          this.onAddToShoppingList();
        }
      },
      { label: 'Edit recipe', icon: 'pi pi-pencil', command: () => {
        // this.delete();
        }
      },
      { label: 'Delete recipe', icon: 'pi pi-times', command: () => {
          // this.delete();
        }
      },
    ];
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
