import React from "react";
import classes from "./User.module.scss";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div className={classes.user}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Edit User</h1>
        <Link to="/newUser">
          <button className={classes.addButton}>Create</button>
        </Link>
      </div>
      <div className={classes.container}>
        <div className={classes.show}>
          <div className={classes.showTop}>
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={classes.showImg}
            />
            <div className={classes.showTopTitle}>
              <span className={classes.showUsername}>Anna Becker</span>
              <span className={classes.showUserTitle}>Software Engineer</span>
            </div>
          </div>
          <div className={classes.showBottom}>
            <span className={classes.showTitle}>Account Details</span>
            <div className={classes.showInfo}>
              <PermIdentity className={classes.showIcon} />
              <span className={classes.showInfoTitle}>annabeck99</span>
            </div>
            <div className={classes.showInfo}>
              <CalendarToday className={classes.showIcon} />
              <span className={classes.showInfoTitle}>10.12.1999</span>
            </div>
            <span className={classes.showTitle}>Contact Details</span>
            <div className={classes.showInfo}>
              <PhoneAndroid className={classes.showIcon} />
              <span className={classes.showInfoTitle}>+1 123 456 67</span>
            </div>
            <div className={classes.showInfo}>
              <MailOutline className={classes.showIcon} />
              <span className={classes.showInfoTitle}>
                annabeck99@gmail.com
              </span>
            </div>
            <div className={classes.showInfo}>
              <LocationSearching className={classes.showIcon} />
              <span className={classes.showInfoTitle}>New York | USA</span>
            </div>
          </div>
        </div>
        <div className={classes.update}>
          <span className={classes.updateTitle}>Edit</span>
          <form className={classes.updateForm}>
            <div className={classes.updateLeft}>
              <div className={classes.updateItem}>
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className={classes.updateInput}
                />
              </div>
              <div className={classes.updateItem}>
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className={classes.updateInput}
                />
              </div>
              <div className={classes.updateItem}>
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className={classes.updateInput}
                />
              </div>
              <div className={classes.updateItem}>
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className={classes.updateInput}
                />
              </div>
              <div className={classes.updateItem}>
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className={classes.updateInput}
                />
              </div>
            </div>
            <div className={classes.updateRight}>
              <div className={classes.updateUpload}>
                <img
                  className={classes.updateImg}
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className={classes.updateIcon} />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className={classes.updateButton}>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default User;
