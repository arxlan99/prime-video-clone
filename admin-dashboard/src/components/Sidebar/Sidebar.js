import React from "react";
import classes from "./Sidebar.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      {props.sidebar && (
        <div className={classes.sidebarContainer}>
          <div className={classes.wrapper}>
            <div>
              <h3>Hwqedsa</h3>
              <h3>Hwqedsa</h3>
              <h3>Hwqedsa</h3>
            </div>
            <div className={classes.menu}>
              <h5 className={classes.title}>Dashboard</h5>
              <ul className={classes.list}>
                <li className={`${classes.listItem} ${classes.active} `}>
                  <HomeIcon className={classes.icons} />
                  <span>Home</span>
                </li>
                <li className={classes.listItem}>
                  <TimelineIcon className={classes.icons} />
                  <span>Analytics</span>
                </li>
                <li className={classes.listItem}>
                  <TrendingUpIcon className={classes.icons} />
                  <span>Sales</span>
                </li>
              </ul>
            </div>
            <div className={classes.menu}>
              <h5 className={classes.title}>Quick Menu</h5>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <HomeIcon className={classes.icons} />
                  <span>Users</span>
                </li>
                <li className={classes.listItem}>
                  <TimelineIcon className={classes.icons} />
                  <span>Products</span>
                </li>
                <li className={classes.listItem}>
                  <TrendingUpIcon className={classes.icons} />
                  <span>Transaction</span>
                </li>
                <li className={classes.listItem}>
                  <TrendingUpIcon className={classes.icons} />
                  <span>Reports</span>
                </li>
              </ul>
            </div>
            <div className={classes.menu}>
              <h5 className={classes.title}>Notifications</h5>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <HomeIcon className={classes.icons} />
                  <span>Mail</span>
                </li>
                <li className={classes.listItem}>
                  <TimelineIcon className={classes.icons} />
                  <span>Feedback</span>
                </li>
                <li className={classes.listItem}>
                  <TrendingUpIcon className={classes.icons} />
                  <span>Message</span>
                </li>
              </ul>
            </div>
            <div className={classes.menu}>
              <h5 className={classes.title}>Staff</h5>
              <ul className={classes.list}>
                <li className={classes.listItem}>
                  <HomeIcon className={classes.icons} />
                  <span>Manage</span>
                </li>
                <li className={classes.listItem}>
                  <TimelineIcon className={classes.icons} />
                  <span>Analytics</span>
                </li>
                <li className={classes.listItem}>
                  <TrendingUpIcon className={classes.icons} />
                  <span>Reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Sidebar;
