import React from "react";
import classes from "./Featured.module.scss";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const FeaturedInfo = () => {
  return (
    <div className={classes.featured}>
      <div className={classes.item}>
        <div className={classes.title}>Revenue</div>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$2,415</span>
          <span className={classes.moneyRate}>
            -11.4{" "}
            <ArrowDownwardIcon
              className={`${classes.icon} ${classes.negative}`}
            />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Sales</div>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$1,421</span>
          <span className={classes.moneyRate}>
            +11.4 <ArrowDownwardIcon className={classes.icon} />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
      <div className={classes.item}>
        <div className={classes.title}>Cost</div>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$3,415</span>
          <span className={classes.moneyRate}>
            +11.4 <ArrowUpwardIcon className={classes.icon} />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
