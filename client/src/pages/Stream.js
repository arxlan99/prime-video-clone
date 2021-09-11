import React from "react";
import classes from "./Stream.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Stream = (props) => {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);
  return (
    <div className={classes.stream}>
      <div>
        <Link to="/" className={classes.back}>
          <ArrowBackIcon />
          Home
        </Link>
      </div>
      <video src={movie.video} className="video" controls></video>
    </div>
  );
};

export default Stream;
