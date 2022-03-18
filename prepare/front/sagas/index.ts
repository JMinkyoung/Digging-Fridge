import {all, fork} from 'redux-saga/effects';
import axios from 'axios';
import recipeSaga from './recipe';

axios.defaults.baseURL = `http://localhost:3065`;
axios.defaults.withCredentials = true;

export default function* rootSaga(){
    // all은 배열 안에 있는 것들을 한번에 실행해준다.
    yield all([
        // fork는 generator함수를 실행하도록 하는 것 !== call
        fork(recipeSaga),
    ])
}