import { createStore, compose, applyMiddleware } from "redux";
import reduxLogger from "redux-logger";
import { createBrowserHistory } from "history";

import createRootReducer from "./store";
import { routerMiddleware } from "connected-react-router";
import sagaMiddleware, { rootSaga } from "./sagas";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    compose(
      applyMiddleware(routerMiddleware(history), reduxLogger, sagaMiddleware)
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
