import { all, fork ,put, takeLatest, throttle, call, take} from "redux-saga/effects";
import { LOAD_RECIPES_FAILURE, LOAD_RECIPES_SUCCESS, LOAD_RECIPES_REQUEST, 
         LOAD_TAG_RECIPES_FAILURE, LOAD_TAG_RECIPES_SUCCESS, LOAD_TAG_RECIPES_REQUEST,
         LOAD_MORE_TAG_RECIPES_FAILURE, LOAD_MORE_TAG_RECIPES_SUCCESS, LOAD_MORE_TAG_RECIPES_REQUEST} from "../modules/recipe";
import axios from "axios";

function loadRecipesAPI(lastId: string) {
  return lastId ? axios.get(`/recipes?lastId=${lastId}`) : axios.get(`/recipes`);
}

function loadTagRecipesAPI(tags: string[]) {
  let query = "";
  tags.forEach((t)=>{
    query += `/${encodeURIComponent(t)}`;
  });
  return axios.get(`/recipes/tags${query}`);
}

function loadMoreTagRecipesAPI(data) {
  let query = "";
  data.tags.forEach((t)=>{
    query += `/${encodeURIComponent(t)}`;
  });
  return data.lastId ? axios.get(`/recipes/tags${query}?lastId=${data.lastId}`) : axios.get(`/recipes/tags${query}`);
}

function* loadRecipes(action) {
  try {
      const result = yield call(loadRecipesAPI, action.data);
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

function* loadTagRecipes(action) {
  try {
      const result = yield call(loadTagRecipesAPI, action.data);
      yield put({
          type: LOAD_TAG_RECIPES_SUCCESS,
          data: result.data,
      });
  } catch (error: any) {
      yield put({
          type: LOAD_TAG_RECIPES_FAILURE,
          error: error.response.data
      });
  }
}

function* loadMoreTagRecipes(action) {
  try {
      const result = yield call(loadMoreTagRecipesAPI, action.data);
      yield put({
          type: LOAD_MORE_TAG_RECIPES_SUCCESS,
          data: result.data,
      });
  } catch (error: any) {
      yield put({
          type: LOAD_MORE_TAG_RECIPES_FAILURE,
          error: error.response.data
      });
  }
}

function* watchLoadRecipes() {
  yield throttle(1000,LOAD_RECIPES_REQUEST,loadRecipes);
}

function* watchLoadTagRecipes() {
  yield takeLatest(LOAD_TAG_RECIPES_REQUEST,loadTagRecipes);
}

function* watchLoadMoreTagRecipes() {
  yield throttle(1000,LOAD_MORE_TAG_RECIPES_REQUEST,loadMoreTagRecipes);
}

export default function* recipeSaga() {
  yield all([
    fork(watchLoadRecipes),
    fork(watchLoadTagRecipes),
    fork(watchLoadMoreTagRecipes),
  ]);
}