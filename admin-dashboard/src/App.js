import { useContext, useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import classes from "./App.module.scss";

import Topbar from "./components/Navbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home";
import NewUser from "./pages/User/NewUser";
import User from "./pages/User/User";
import UserList from "./pages/User/UserList";
import Movie from "./pages/Movies/Movie";
import NewMovie from "./pages/Movies/NewMovie";
import MovieList from "./pages/Movies/MovieList";
import Login from "./pages/Login/Login";
import { AuthContext } from "./store/context/auth-context";
import { Fragment } from "react";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const containerRef = useRef();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (containerRef.current !== undefined) {
      if (showSidebar === false) {
        containerRef.current.style.width = "100%";
        containerRef.current.style.left = "0";
      } else {
        containerRef.current.style.width = "calc(100% - 300px)";
        containerRef.current.style.height = "100vh";
        containerRef.current.style.left = "300px";
      }
    }
  }, [showSidebar, containerRef]);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {user && (
          <Fragment>
            <div className={classes.app}>
              <div className={classes.sidebar}>
                <Sidebar sidebar={showSidebar} />
              </div>
              <div className={classes.container} ref={containerRef}>
                <Topbar onToggle={setShowSidebar} currentState={showSidebar} />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newuser">
                  <NewUser />
                </Route>
                <Route path="/movies">
                  <MovieList />
                </Route>
                <Route path="/movie/:movieId">
                  <Movie />
                </Route>
                <Route path="/newmovie">
                  <NewMovie />
                </Route>
              </div>
            </div>
          </Fragment>
        )}
      </Switch>
    </Router>
  );
};

export default App;
