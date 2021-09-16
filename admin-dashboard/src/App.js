import {
  useContext,
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
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
import { AuthContext } from "./store/auth-context";
import { Fragment } from "react";
import MainList from "./pages/List/MainList";
import List from "./pages/List/List";
import NewList from "./pages/List/NewList";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

const App = () => {
  const history = useHistory();

  const [width, height] = useWindowSize();
  const [showSidebar, setShowSidebar] = useState(false);
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

  useEffect(() => {
    if (width >= 1100) {
      setShowSidebar(true);
    } else if (width < 1100 && width > 820) {
      setShowSidebar(false);
    } else if (width < 820) {
    }
  }, [width]);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        {!user && <Redirect to="/login" />}
        {user && (
          <Fragment>
            <div id="app" className={classes.app}>
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
                <Route path="/lists">
                  <MainList />
                </Route>
                <Route path="/list/:listId">
                  <List />
                </Route>
                <Route path="/newlist">
                  <NewList />
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
