import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classes from "./App.module.scss";

import Topbar from "./components/Navbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home";
import NewUser from "./pages/User/NewUser";
import User from "./pages/User/User";
import UserList from "./pages/User/UserList";
import Product from "./pages/Product/Product";
import NewProduct from "./pages/Product/NewProduct";
import ProductList from "./pages/Product/ProductList";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const containerRef = useRef();

  useEffect(() => {
    if (showSidebar === false) {
      containerRef.current.style.width = "100%";
      containerRef.current.style.left = "0";
    } else {
      containerRef.current.style.width = "calc(100% - 300px)";
      containerRef.current.style.height = "100vh";
      containerRef.current.style.left = "300px";
    }
  }, [showSidebar]);

  return (
    <Router>
      <div className={classes.app}>
        <div className={classes.sidebar}>
          <Sidebar sidebar={showSidebar} />
        </div>
        <div className={classes.container} ref={containerRef}>
          <Topbar onToggle={setShowSidebar} currentState={showSidebar} />
          <Switch>
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
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/product/:productId">
              <Product />
            </Route>
            <Route path="/newproduct">
              <NewProduct />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
