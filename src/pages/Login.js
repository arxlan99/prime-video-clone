import React from "react";
import LoginNavbar from "../components/Navbar/LoginNavbar";
import { Link } from "react-router-dom";

import classes from "./Login.module.scss";
import backImage1 from "../assets/images/back1.jpg";
import backImage2 from "../assets/images/back2.jpg";
import backImage3 from "../assets/images/back3.jpg";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginNavbar />
      <div className={classes.container}>
        <div className={classes.firstImage}>
          <div>
            <h1>Amazon Prime is now in Turkey.</h1>
            <p>
              Join Amazon Prime to watch popular movies and TV shows, including
              award-winning Amazon Originals. Amazon Prime also includes free
              and fast delivery on thousands of items and more.
            </p>
            <Link to="/register">
              <button>Prime Member? Sign in</button>
            </Link>
            <br />
            <Link to="/register">
              <button>Start Your 30-day free trial</button>
            </Link>

            <br />

            <span>
              * After 30 days, Amazon Prime automatically renews at USD
              7,90/month.
            </span>
          </div>
          <img src={backImage1} alt="background1" />
        </div>
      </div>
      <div className={classes.footer}></div>
    </div>
  );
};

export default Login;
