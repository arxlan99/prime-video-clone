import React from "react";
import classes from "./WidgetSm.module.scss";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className={classes.widget}>
      <span className={classes.smTitle}>New Join Members</span>
      <ul className={classes.smList}>
        <li className={classes.listItem}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className={classes.smImg}
          />
          <div className={classes.smUser}>
            <span className={classes.smUsername}>John Doe</span>
            <span className={classes.smUserTitle}>Software Engineer</span>
          </div>
          <button className={classes.smButton}>
            <Visibility className={classes.smIcon} />
            Display
          </button>
        </li>
        <li className={classes.listItem}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className={classes.smImg}
          />
          <div className={classes.smUser}>
            <span className={classes.smUsername}>John Doe</span>
            <span className={classes.smUserTitle}>Software Engineer</span>
          </div>
          <button className={classes.smButton}>
            <Visibility className={classes.smIcon} />
            Display
          </button>
        </li>
        <li className={classes.listItem}>
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className={classes.smImg}
          />
          <div className={classes.smUser}>
            <span className={classes.smUsername}>John Doe</span>
            <span className={classes.smUserTitle}>Software Engineer</span>
          </div>
          <button className={classes.smButton}>
            <Visibility className={classes.smIcon} />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
