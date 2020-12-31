import configureStore, { history } from "./redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Home from "./components/home/Home";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
