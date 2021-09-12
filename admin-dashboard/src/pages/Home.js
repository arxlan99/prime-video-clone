import React from "react";
import Chart from "../components/Content/Chart/Chart";
import FeaturedInfo from "../components/Content/Featured/FeaturedInfo";
import WidgetLg from "../components/Content/Widget/WidgetLg";
import WidgetSm from "../components/Content/Widget/WidgetSm";
import { userData } from "../data/dummyData";
import classes from "./Home.module.scss";

const Content = () => {
  return (
    <div className={classes.home}>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className={classes.homeWidgets}>
        <WidgetLg />
        <WidgetSm />
      </div>
    </div>
  );
};

export default Content;
