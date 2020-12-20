import configureStore, { history } from "./redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import Sample from "./components/sample";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={Sample} />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
