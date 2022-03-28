export interface IrecipeInitialState {
  mainRecipes: any[],
  tagRecipes: any[],

  loadRecipesLoading: boolean,
  loadRecipesDone: boolean,
  loadRecipesError: string | null,

  loadTagRecipesLoading: boolean,
  loadTagRecipesDone: boolean,
  loadTagRecipesError: string | null,

  loadMoreTagRecipesLoading: boolean,
  loadMoreTagRecipesDone: boolean,
  loadMoreTagRecipesError: string | null,
}

export interface ItagInitialState {
  tags: string[],

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