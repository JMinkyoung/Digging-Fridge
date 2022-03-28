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

  loadMoreTagRecipesLoading: false,
  loadMoreTagRecipesDone: false,
  loadMoreTagRecipesError: null,

}
export type IrecipeReducerState = typeof initialState;

export const LOAD_RECIPES_REQUEST = 'recipe/LOAD_RECIPES_REQUEST';
export const LOAD_RECIPES_SUCCESS = 'recipe/LOAD_RECIPES_SUCCESS';
export const LOAD_RECIPES_FAILURE = 'recipe/LOAD_RECIPES_FAILURE';

export const LOAD_TAG_RECIPES_REQUEST = 'recipe/LOAD_TAG_RECIPES_REQUEST';
export const LOAD_TAG_RECIPES_SUCCESS = 'recipe/LOAD_TAG_RECIPES_SUCCESS';
export const LOAD_TAG_RECIPES_FAILURE = 'recipe/LOAD_TAG_RECIPES_FAILURE';

export const LOAD_MORE_TAG_RECIPES_REQUEST = 'recipe/LOAD_MORE_TAG_RECIPES_REQUEST';
export const LOAD_MORE_TAG_RECIPES_SUCCESS = 'recipe/LOAD_MORE_TAG_RECIPES_SUCCESS';
export const LOAD_MORE_TAG_RECIPES_FAILURE = 'recipe/LOAD_MORE_TAG_RECIPES_FAILURE';

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
      case LOAD_MORE_TAG_RECIPES_REQUEST:
        return {
          ...state,
          loadMoreTagRecipesLoading: true,
          loadMoreTagRecipesDone: false,
          loadMoreTagRecipesError: null,
      };
      case LOAD_MORE_TAG_RECIPES_SUCCESS:
        return {
          ...state, 
          tagRecipes: [...state.tagRecipes,...action.data],
          loadMoreTagRecipesLoading: false,
          loadMoreTagRecipesDone : true,
          loadMoreTagRecipesError : null,
        }
      case LOAD_MORE_TAG_RECIPES_FAILURE:
        return{
          ...state,
          loadMoreTagRecipesLoading: false,
          loadMoreTagRecipesError : action.error,
        }
    default:
      return state;
  }
}

export default recipe;
