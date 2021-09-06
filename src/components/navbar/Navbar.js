import { ArrowDropDown, Search } from "@material-ui/icons";
import React from "react";
import classes from "./Navbar.module.scss";
import userImage from "../../assets/images/user.png";
import logoImage from "../../assets/images/logo.PNG";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img src={logoImage} alt="logo" />
          <span>Home</span>
          <span>Tv Shows</span>
          <span>Movies</span>
          <span>Kids</span>
        </div>
        <div className={classes.right}>
          <Search className={classes.search} />
          <img src={userImage} alt="user" />
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
