import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'Description recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('Meat', 1),
      new Ingredient('ddd', 2)
    ]),
    new Recipe('Test recipe 2', 'Description recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', [
      new Ingredient('ddd', 1),
      new Ingredient('aaa', 2),
    ])
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}