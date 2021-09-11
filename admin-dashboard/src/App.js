import { Fragment, useState } from "react";
import Topbar from "./components/Navbar/Topbar";
import classes from "./App.module.scss";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className={classes.app}>
      <Sidebar sidebar={showSidebar} />
      <div className={classes.container}>
        <Topbar onToggle={setShowSidebar} currentState={showSidebar} />
        <div className={classes.content}>sa</div>
      </div>
    </div>
  );
};

export default App;
