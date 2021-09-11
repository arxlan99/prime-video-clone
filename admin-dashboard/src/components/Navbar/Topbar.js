import React from "react";
import classes from "./Topbar.module.scss";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import LanguageIcon from "@material-ui/icons/Language";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

const Topbar = (props) => {
  const toggleHandler = () => {
    props.onToggle(!props.currentState);
  };

  return (
    <div className={classes.topbar}>
      <div className={classes.wrapper}>
        <div className={classes.leftSection}>
          <MenuIcon className={classes.icons} onClick={toggleHandler} />
        </div>
        <div className={classes.rightSection}>
          <div className={classes.topbarIconContainer}>
            <NotificationsNoneIcon className={classes.icons} />
            <span className={classes.topIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconContainer}>
            <LanguageIcon className={classes.icons} />
            <span className={classes.topIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconContainer}>
            <SettingsIcon className={classes.icons} />
            <span className={classes.topIconBadge}>2</span>
          </div>
          <img
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="pp"
            className={classes.topAvatar}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
