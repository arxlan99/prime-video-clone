import { ArrowDropDown } from "@material-ui/icons";
import React from "react";
import classes from "./Navbar.module.scss";
import logoImage from "../../assets/images/logo.PNG";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.container}>
        <div className={classes.left}>
          <img src={logoImage} alt="logo" />
        </div>
        <div className={classes.right}>
          <span>EN</span>
          <div className={classes.profile}>
            <ArrowDropDown className={classes.icon} />
            <div className={classes.options}>
              <div className={classes.options_left}>
                <span>English</span>
                <span>Deutsch</span>
                <span>Espanol </span>
                <span></span>
              </div>
              <div className={classes.options_right}>
                <span>Turkish</span>
                <span>Dansk </span>
                <span>Polski</span>
                <span></span>
              </div>
            </div>
          </div>
          <span className={classes.sign}>Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
