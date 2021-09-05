import React from "react";
import classes from "./Home.module.scss";
import Navbar from "../components/navbar/Navbar";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <Featured />
      <div className={classes.listContainer}>
        <List />
        <List />
        <List />
      </div>
    </div>
  );
};

export default Home;
