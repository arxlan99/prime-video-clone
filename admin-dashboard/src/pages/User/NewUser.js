import React from "react";
import classes from "./NewUser.module.scss";

const NewUser = () => {
  return (
    <div className={classes.User}>
      <h1 className={classes.UserTitle}>New User</h1>
      <form className={classes.UserForm}>
        <div className={classes.UserItem}>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className={classes.UserItem}>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className={classes.UserItem}>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className={classes.UserItem}>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className={classes.UserItem}>
          <label>Phone</label> <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className={classes.UserItem}>
          <label>Address</label>
          <input type="text" placeholder={classes.York} />
        </div>
        <div className={classes.UserItem}>
          <label>Gender</label>
          <div className={classes.UserGender}>
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className={classes.UserItem}>
          <label>Active</label>
          <select className={classes.UserSelect} name="active" id="active">
            <option value="yes">Yes</option> <option value="no">No</option>
          </select>
        </div>
        <button className={classes.UserButton}>Create</button>
      </form>
    </div>
  );
};

export default NewUser;
