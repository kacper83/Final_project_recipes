import * as categories from '../constants/food-categories';
import { SOUP } from "../constants/food-categories";

const data = {
  recipes: [
    {
      id: 1,
      title: "Przepis 1",
      category: "dessert"
    },
    {
      id: 2,
      title: "Przepis 2",
      category: SOUP,
    },
    {
      id: 3,
      title: "Przepis 3",
      category: "main dish"
    },
    {
      id: 4,
      title: "Przepis 4",
      category: "cake"
    },
    {
      id: 5,
      title: "Przepis 5",
      category: "soup"
    },
    {
      id: 6,
      title: "Przepis 6",
      category: "cake"
    }
  ]
};

export class FoodService {
  getAllRecipes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  }

  getRecipeByPreference(preference) {

  }

  getRecipeByCategory(category) {

  }
}
