import React, { useEffect, useRef } from "react";
import classes from "./Sidebar.module.scss";
import HomeIcon from "@material-ui/icons/Home";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AssessmentIcon from "@material-ui/icons/Assessment";
import MailIcon from "@material-ui/icons/Mail";
import FeedbackIcon from "@material-ui/icons/Feedback";
import MessageIcon from "@material-ui/icons/Message";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ListIcon from "@material-ui/icons/List";

import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const sidebaRef = useRef();

  useEffect(() => {
    if (props.sidebar === false) {
      sidebaRef.current.style.left = "-300px";
    } else if (props.sidebar === true) {
      sidebaRef.current.style.left = "0";
    }
  }, [props.sidebar]);

  return (
    <div className={classes.sidebar} ref={sidebaRef}>
      <div className={classes.sidebarContainer}>
        <div className={classes.wrapper}>
          <div className={classes.title}>
            <h2>LOGO</h2>
          </div>
          <div className={classes.menu}>
            <h5 className={classes.title}>Dashboard</h5>
            <ul className={classes.list}>
              <Link className="link" to="/">
                <li className={`${classes.listItem} ${classes.active} `}>
                  <HomeIcon className={classes.icons} />
                  <span>Home</span>
                </li>
              </Link>

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
          <hr className={classes.divider} />

          <div className={classes.menu}>
            <h5 className={classes.title}>Quick Menu</h5>
            <ul className={classes.list}>
              <Link className="link" to="/users">
                <li className={classes.listItem}>
                  <PersonIcon className={classes.icons} />
                  <span>Users</span>
                </li>
              </Link>
              <Link className="link" to="/movies">
                <li className={classes.listItem}>
                  <ShoppingCartIcon className={classes.icons} />
                  <span>Movies</span>
                </li>
              </Link>
              <Link className="link" to="/lists">
                <li className={classes.listItem}>
                  <ListIcon className={classes.icons} />
                  <span>Lists</span>
                </li>
              </Link>

              <li className={classes.listItem}>
                <AssessmentIcon className={classes.icons} />
                <span>Reports</span>
              </li>
            </ul>
          </div>
          <hr className={classes.divider} />

          <div className={classes.menu}>
            <h5 className={classes.title}>Notifications</h5>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <MailIcon className={classes.icons} />
                <span>Mail</span>
              </li>
              <li className={classes.listItem}>
                <FeedbackIcon className={classes.icons} />
                <span>Feedback</span>
              </li>
              <li className={classes.listItem}>
                <MessageIcon className={classes.icons} />
                <span>Message</span>
              </li>
            </ul>
          </div>
          <hr className={classes.divider} />

          <div className={classes.menu}>
            <h5 className={classes.title}>Staff</h5>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <BusinessCenterIcon className={classes.icons} />
                <span>Manage</span>
              </li>
              <li className={classes.listItem}>
                <TimelineIcon className={classes.icons} />
                <span>Analytics</span>
              </li>
              <li className={classes.listItem}>
                <ReceiptIcon className={classes.icons} />
                <span>Reports</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
