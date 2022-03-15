import { AnyAction, combineReducers, Store } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { IrecipeReducerState } from "./recipe";
import mode from "./mode";
import recipe from "./recipe";

// const persisConfig = {
//   key: "root",
//   whitelist:["mode"]
// };

export type State = {
  recipe: IrecipeReducerState;
  mode: string;
};

const rootReducer = (state: State | undefined, action: AnyAction): State => {
  switch (action.type){
      case HYDRATE:
        return action.payload;
      default: {
        const combinedReducer =combineReducers({
              recipe,
              mode
        });
        return combinedReducer(state,action);
      }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;