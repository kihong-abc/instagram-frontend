import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield all([]);
}

export default sagaMiddleware;
