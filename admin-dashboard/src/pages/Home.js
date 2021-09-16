import React, { useEffect, useState } from "react";
import Chart from "../components/Content/Chart/Chart";
import FeaturedInfo from "../components/Content/Featured/FeaturedInfo";
import WidgetLg from "../components/Content/Widget/WidgetLg";
import WidgetSm from "../components/Content/Widget/WidgetSm";
import { userData } from "../data/dummyData";
import classes from "./Home.module.scss";
import axios from "axios";

const Content = () => {
  const MONTHS = () => [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/user/stats", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });

        const statsList = res.data.sort((a, b) => a._id - b._id);
      } catch (error) {}
    };
  }, []);

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
