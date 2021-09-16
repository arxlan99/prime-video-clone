import React, { useContext, useState } from "react";
import classes from "./Login.module.scss";
import registerLogo from "../assets/images/registerLogo.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/auth-context";
import { loginFailure, loginStart, loginSuccess } from "../store/actions/auth";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatchAuth } = useContext(AuthContext);

  const loginHandler = (e) => {
    e.preventDefault();
    const login = async () => {
      dispatchAuth(loginStart());
      try {
        const res = await axios.post("/login", { email, password });
        dispatchAuth(loginSuccess(res.data));
      } catch (err) {
        dispatchAuth(loginFailure());
        alert(err);
      }
    };
    login();
  };

  return (
    <div className={classes.register}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={registerLogo} alt="register" />
        </div>
        <div className={classes.formContainer}>
          <h2>Sign-In</h2>
          <label htmlFor="email">Email</label>
          <div>
            <input
              className={classes.email}
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              className={classes.password}
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input
              className={classes.signIn}
              type="submit"
              value="Sign-In"
              onClick={loginHandler}
              disabled={isFetching}
            />
          </div>
          <div>
            By continuing, you agree to{" "}
            <a href="!#">Amazon's Conditions of Use and Privacy Notice.</a>
          </div>
          <div>
            <input type="checkbox" id="signed" />
            <label htmlFor="signed"> Keep me signed in.</label>
          </div>
          <div>
            <Link to="/signup">
              <input
                className={classes.createButton}
                type="submit"
                value="Create your Amazon account"
              />
            </Link>
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
