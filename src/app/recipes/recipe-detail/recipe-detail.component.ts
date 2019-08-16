import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { RecipeService } from './../recipe.service';
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
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

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

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
