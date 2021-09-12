import React from "react";
import classes from "./WidgetLg.module.scss";

const WidgetLg = () => {
  const Button = ({ type }) => {
    if (type === "Pending") {
      return (
        <button className={`${classes.lgButton} ${classes.Pending}`}>
          {type}
        </button>
      );
    } else if (type === "Approved") {
      return (
        <button className={`${classes.lgButton} ${classes.Approved}`}>
          {type}
        </button>
      );
    } else
      return (
        <button className={`${classes.lgButton} ${classes.Declined}`}>
          {type}
        </button>
      );
  };
  return (
    <div className={classes.widget}>
      <h3 className={classes.lgTitle}>Latest transactions</h3>
      <table className={classes.lgTable}>
        <tr className={classes.lgTr}>
          <th className={classes.lgTh}>Customer</th>
          <th className={classes.lgTh}>Date</th>
          <th className={classes.lgTh}>Amount</th>
          <th className={classes.lgTh}>Status</th>
        </tr>
        <tr className={classes.lgTr}>
          <td className={classes.lgUser}>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.lgImg}
            />
            <span className={classes.lgName}>Emma Carol</span>
          </td>
          <td className={classes.lgDate}>2 Jun 2021</td>
          <td className={classes.lgAmount}>$122.00</td>
          <td className={classes.lgStatus}>
            <Button type="Declined" />
          </td>
        </tr>
        <tr className={classes.lgTr}>
          <td className={classes.lgUser}>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.lgImg}
            />
            <span className={classes.lgName}>Emma Carol</span>
          </td>
          <td className={classes.lgDate}>2 Jun 2021</td>
          <td className={classes.lgAmount}>$122.00</td>
          <td className={classes.lgStatus}>
            <Button type="Approved" />
          </td>
        </tr>
        <tr className={classes.lgTr}>
          <td className={classes.lgUser}>
            <img
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className={classes.lgImg}
            />
            <span className={classes.lgName}>Emma Carol</span>
          </td>
          <td className={classes.lgDate}>2 Jun 2021</td>
          <td className={classes.lgAmount}>$122.00</td>
          <td className={classes.lgStatus}>
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
