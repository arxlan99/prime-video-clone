import React, { useRef, useState } from "react";
import classes from "./Signup.module.scss";
import registerLogo from "../assets/images/registerLogo.png";
import axios from "axios";
import { useHistory } from "react-router";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmail(emailRef.current.value);
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);

    try {
      const res = await axios.post("/register", { email, username, password });
      console.log(res);
      history.push("/login");
    } catch (error) {
      alert(error.response.data.message);
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data.data[0].msg);
        console.log(error.response.data.data[1].msg);
        console.log(error.response.data.data[2].msg);
      }
    }
  };

  return (
    <div className={classes.signup}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <img src={registerLogo} alt="register" />
        </div>
        <div className={classes.formContainer}>
          <h2>Sign-Up</h2>
          <label htmlFor="username">Username</label>
          <div>
            <input
              className={classes.email}
              type="text"
              id="text"
              ref={usernameRef}
            />
          </div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              className={classes.email}
              type="email"
              id="email"
              name="email"
              ref={emailRef}
            />
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              className={classes.password}
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
            />
          </div>
          <div>
            <input
              className={classes.signIn}
              type="submit"
              value="Sign-Up"
              onClick={submitHandler}
            />
          </div>
          <div>
            By continuing, you agree to{" "}
            <a href="!#">Amazon's Conditions of Use and Privacy Notice.</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
