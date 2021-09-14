import React, { useContext, useState } from "react";
import classes from "./Login.module.scss";
import { AuthContext } from "../../store/context/auth-context";

import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSucess,
} from "../../store/actions/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authCtx = useContext(AuthContext);

  const loginHandler = async (e) => {
    e.preventDefault();

    authCtx.dispatchAuth(loginStart());
    try {
      const res = await axios.post("/login", { email, password });
      res.data.isAdmin &&
        (await authCtx.dispatchAuth(loginSucess({ email, password })));

      console.log(res.data);
    } catch (error) {
      authCtx.dispatchAuth(loginFailure());
    }
  };

  return (
    <div className={classes.login}>
      <h3>Login</h3>
      <form className={classes.form}>
        <input
          type="text"
          placeholder="email"
          className={classes.input}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className={classes.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className={classes.sendButton}
          onClick={loginHandler}
          disabled={authCtx.isFetching}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
