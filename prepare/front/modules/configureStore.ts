import {createWrapper} from 'next-redux-wrapper';
import {AnyAction, applyMiddleware, compose, createStore, Store} from 'redux';
import rootReducer, { State } from '../modules/index'
import createSagaMiddleware, { Task } from 'redux-saga';
import rootSaga from'../sagas';

export interface SagaStore extends Store<State, AnyAction> {
  sagaTask: Task;
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<Store<State>>(configureStore, {debug: true});


