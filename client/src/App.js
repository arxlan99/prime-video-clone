import Home from "./pages/Home";
import Stream from "./pages/Stream";
import Login from "./pages/Login";
import AdHome from "./pages/AdHome";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import { useContext } from "react";
import { AuthContext } from "./store/auth-context";
import Signup from "./pages/Signup";

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/adhome" />}
        </Route>
        <Route path="/signup">{!user ? <Signup /> : <Redirect to="/" />}</Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        <Route path="/adhome">{!user ? <AdHome /> : <Redirect to="/" />}</Route>
        {user && (
          <Fragment>
            <Route path="/movies">
              <Home type="movie" />
            </Route>
            <Route path="/series">
              <Home type="series" />
            </Route>
            <Route path="/stream">
              <Stream />
            </Route>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default App;
