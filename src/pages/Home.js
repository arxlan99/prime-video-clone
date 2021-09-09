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
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2EwNTlkMmVkMTZiYzRjMWE0YTMwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTIxNTQ1NiwiZXhwIjoxNjMxMjMzNDU2fQ.SC7TUCp-O1xVYrJRQtj9Z0YUXio_4GR0dkjEKNGVRRY",
            },
          }
        );
        setLists(res.data);
        console.log(res.data);
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
          <List list={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
