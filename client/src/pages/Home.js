import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Home = (props) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios(
          `lists/${props.type ? "?type=" + props.type : ""}&${
            props.genre ? "genre =" + props.genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2EwNGZjOWQ5Y2Y3MDMwYWNmYjQyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTQ2MTg5MCwiZXhwIjoxNjMxNDc5ODkwfQ.4BI1Rustck9twHoLLGq2zynp-ztE4baN3bPgWSUE6UE",
            },
          }
        );
        setLists(res.data);
      } catch (error) {}
    };
    getRandomList();
  }, [props.genre, props.type]);

  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type={props.type} />
      <div className={classes.listContainer}>
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
