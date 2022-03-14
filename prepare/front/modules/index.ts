import { combineReducers } from "redux";

import mode from "./mode";
import recipe from "./recipe";

// const persisConfig = {
//   key: "root",
//   whitelist:["mode"]
// };
const rootReducer = combineReducers({
  recipe,
  mode
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;