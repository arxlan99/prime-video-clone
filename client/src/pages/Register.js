import React from "react";
import classes from "./Register.module.scss";
import registerLogo from "../assets/images/registerLogo.png";

const Register = () => {
  return (
    <div className={classes.register}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={registerLogo} alt="register" />
        </div>
        <div className={classes.formContainer}>
          <h2>Sign-In</h2>
          <label for="email">Email</label>
          <div>
            <input
              className={classes.email}
              type="email"
              id="email"
              name="email"
            />
          </div>
          <label for="password">Password</label>
          <div>
            <input
              className={classes.password}
              type="password"
              id="password"
              name="password"
            />
          </div>
          <div>
            <input className={classes.signIn} type="submit" value="Sign-In" />
          </div>
          <div>
            By continuing, you agree to{" "}
            <a href="!#">Amazon's Conditions of Use and Privacy Notice.</a>
          </div>
          <div>
            <input type="checkbox" id="signed" />
            <label for="signed"> Keep me signed in.</label>
          </div>
          <div>
            <input
              className={classes.createButton}
              type="submit"
              value="Create your Amazon account"
            />
          </div>
        </div>
      </div>
      <div className={classes.footer}>
        <ul>
          <li> Conditions of Use </li>
          <li> Privacy Notice </li> <li> Help </li>
        </ul>
        <div>© 1996-2021, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  );
};

export default Register;
