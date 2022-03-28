import { ItagInitialState } from "../interface";

export const initialState: ItagInitialState = {
  tags: [],
}

export type ItagReducerState = typeof initialState;

export const ADD_TAG  = 'tag/ADD_TAG';
export const DELETE_TAG = 'tag/DELETE_TAG';

const tag = (state = initialState, action) => {
  switch(action.type){
    case ADD_TAG:
      return {
        ...state,
        tags: [...state.tags,action.data],
      };
    case DELETE_TAG:
      return {
        ...state,
        tags: [...action.data]
      }
    default:
      return state;
  }
}

export default tag;