import { ArrowDropDown, Search } from "@material-ui/icons";
import React from "react";
import classes from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img src={process.env.PUBLIC_URL + "/images/logo1.png"} alt="logo" />
          <span>Home</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>Kids</span>
        </div>
        <div className={classes.right}>
          <Search className={classes.search} />
          <img src={process.env.PUBLIC_URL + "/images/user.png"} alt="user" />
          <span className={classes.icon}>Username</span>

          <div className={classes.profile}>
            <ArrowDropDown className={classes.icon} />
            <div className={classes.options}>
              <div className={classes.options_left}>
                <span>Your Watchlist</span>
                <span>Account and Setting</span>
                <span>Watch Anywhere </span>
                <span>Help</span>
                <span className={classes.options_left__signout}>Sign Out</span>
              </div>
              <div className={classes.options_right}>
                <span>Kids</span>
                <span>Add new</span>
                <span>Manage Profiles </span>
                <span>Learn More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
