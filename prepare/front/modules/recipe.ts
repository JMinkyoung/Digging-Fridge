export const initialState = {
  mainRecipes: [],
  loadRecipesLoading: false,
  loadRecipesDone: false,
  loadRecipesError: null
}

export const LOAD_RECIPES_REQUEST = 'recipe/LOAD_RECIPES_REQUEST' as const;
export const LOAD_RECIPES_SUCCESS = 'recipe/LOAD_RECIPES_SUCCESS' as const;
export const LOAD_RECIPES_FAILURE = 'recipe/LOAD_RECIPES_FAILURE' as const;


const recipe = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPES_REQUEST:{
      return{
        ...state,
        loadRecipesLoading: true,
        loadRecipesDone : false,
        loadRecipesError : null,
      }
    }
    case LOAD_RECIPES_SUCCESS:{
      return{
        ...state,
        mainRecipes: [action.data, ...state.mainRecipes],
        loadRecipesLoading: false,
        loadRecipesDone : true,
        loadRecipesError : null,
      }
    }
    case LOAD_RECIPES_FAILURE:{
      return{
        ...state,
        loadRecipesLoading: false,
        loadRecipesError : action.error,
      }
    }
    default:
      return state;
  }
}

export default recipe;
