import { all, fork ,put, takeLatest, throttle, call} from "redux-saga/effects";
import { LOAD_RECIPES_FAILURE, LOAD_RECIPES_SUCCESS, LOAD_RECIPES_REQUEST } from "../modules/recipe";
import axios from "axios";

function loadRecipesAPI() {
  return axios.get(`/recipes`);
}

function* loadRecipes() {
  try {
      const result = yield call(loadRecipesAPI);
      yield put({
          type: LOAD_RECIPES_SUCCESS,
          data: result.data,
      });
  } catch (error: any) {
      yield put({
          type: LOAD_RECIPES_FAILURE,
          error: error.response.data
      });
  }
}

function* watchLoadRecipes() {
  yield throttle(4000 ,LOAD_RECIPES_REQUEST,loadRecipes);
}

export default function* recipeSaga() {
  yield all([
    fork(watchLoadRecipes),
  ]);
}