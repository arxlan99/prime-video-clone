import React from "react";
import classes from "./Featured.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Featured = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.image}>
        <span className={classes.iconLeft}>
          <ArrowBackIosIcon style={{ color: "#EFF1F1" }} />
        </span>
        <span className={classes.iconRight}>
          <ArrowForwardIosIcon style={{ color: "#EFF1F1" }} />
        </span>
        <img src={process.env.PUBLIC_URL + "/images/banner.png"} alt="banner" />
      </div>
    </div>
  );
};

export default Featured;
