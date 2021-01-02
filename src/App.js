import configureStore, { history } from "./redux";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Home from "./components/home/Home";
import { SignUp } from "./components/signup";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
