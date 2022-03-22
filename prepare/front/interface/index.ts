export interface IrecipeInitialState {
  mainRecipes: any[],
  loadRecipesLoading: boolean,
  loadRecipesDone: boolean,
  loadRecipesError: string | null
}

export interface Recipe {
  _id: string,
  title: string,
  image ?: string,
  nutriment ?: object,
  ingredient: string[],
  recipe: string[],
  ingredientKey: string,
  type: string
};