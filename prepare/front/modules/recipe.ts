import { IrecipeInitialState } from "../interface";

export const initialState: IrecipeInitialState = {
  mainRecipes: [],
  tagRecipes: [],

  loadRecipesLoading: false,
  loadRecipesDone: false,
  loadRecipesError: null,

  loadTagRecipesLoading: false,
  loadTagRecipesDone: false,
  loadTagRecipesError: null,

}
export type IrecipeReducerState = typeof initialState;

export const LOAD_RECIPES_REQUEST = 'recipe/LOAD_RECIPES_REQUEST' as const;
export const LOAD_RECIPES_SUCCESS = 'recipe/LOAD_RECIPES_SUCCESS' as const;
export const LOAD_RECIPES_FAILURE = 'recipe/LOAD_RECIPES_FAILURE' as const;

export const LOAD_TAG_RECIPES_REQUEST = 'recipe/LOAD_TAG_RECIPES_REQUEST' as const;
export const LOAD_TAG_RECIPES_SUCCESS = 'recipe/LOAD_TAG_RECIPES_SUCCESS' as const;
export const LOAD_TAG_RECIPES_FAILURE = 'recipe/LOAD_TAG_RECIPES_FAILURE' as const;

const recipe = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES_REQUEST:
      return {
        ...state,
        loadRecipesLoading: true,
        loadRecipesDone: false,
        loadRecipesError: null,
    };
    case LOAD_RECIPES_SUCCESS:
      return {
        ...state,
        mainRecipes: [...state.mainRecipes,...action.data ],
        loadRecipesLoading: false,
        loadRecipesDone : true,
        loadRecipesError : null,
      }
    case LOAD_RECIPES_FAILURE:
      return{
        ...state,
        loadRecipesLoading: false,
        loadRecipesError : action.error,
      }
      case LOAD_TAG_RECIPES_REQUEST:
        return {
          ...state,
          loadTagRecipesLoading: true,
          loadTagRecipesDone: false,
          loadTagRecipesError: null,
      };
      case LOAD_TAG_RECIPES_SUCCESS:
        return {
          ...state, 
          tagRecipes: [...action.data],
          loadTagRecipesLoading: false,
          loadTagRecipesDone : true,
          loadTagRecipesError : null,
        }
      case LOAD_TAG_RECIPES_FAILURE:
        return{
          ...state,
          loadTagRecipesLoading: false,
          loadTagRecipesError : action.error,
        }
    default:
      return state;
  }
}

export default recipe;
