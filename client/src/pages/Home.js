import React, { useEffect, useState } from "react";
import classes from "./Home.module.scss";
import Navbar from "../components/Navbar/Navbar";
import Featured from "../components/Featured/Featured";
import List from "../components/List/List";
import Footer from "../components/Footer/Footer";
import axios from "axios";

const Home = (props) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      console.log(props.type);
      try {
        if (props.type === undefined) {
          const res = await axios(`${process.env.REACT_APP_API_URL}/lists`, {
            headers: {
              token:
                "Bearer " +
                JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          setLists(res.data);
        } else {
          const res = await axios(
            `${process.env.REACT_APP_API_URL}/lists/${props.type ? "?type=" + props.type : ""}&${
              props.genre ? "genre =" + props.genre : ""
            }`,
            {
              headers: {
                token:
                  "Bearer " +
                  JSON.parse(localStorage.getItem("user")).accessToken,
              },
            }
          );
          setLists(res.data);
        }
      } catch (error) {}
    };
    getRandomList();
  }, [props.genre, props.type]);

  return (
    <div className={classes.home}>
      <Navbar />
      <Featured type={props.type} />
      <div className={classes.listContainer} setGenre={setGenre}>
        {lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
