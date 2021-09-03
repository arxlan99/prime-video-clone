import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
          <span>Home</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>Kids</span>
        </div>
        <div className={classes.right}>
          <span>Search</span>
          <span>Username</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
