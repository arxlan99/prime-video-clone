import React, { useEffect, useState } from "react";
import clasess from "./ListItem.module.scss";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import BlockIcon from "@material-ui/icons/Block";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import Filter3Icon from "@material-ui/icons/Filter3";

import { motion } from "framer-motion";

import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("/movies/find/" + props.item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxM2EwNGZjOWQ5Y2Y3MDMwYWNmYjQyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMTQ2MTg5MCwiZXhwIjoxNjMxNDc5ODkwfQ.4BI1Rustck9twHoLLGq2zynp-ztE4baN3bPgWSUE6UE",
          },
        });
        setMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [props.item]);

  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        zIndex: 200,
        x: -10,
      }}
      className="container"
    >
      <Link to={{ pathname: "/stream", movie: movie }}>
        <div className={clasess.listItem}>
          <img src={movie.img} alt="" />
          <div className={clasess.itemInfo}>
            <div className={clasess.icons}>
              <div>
                <PlayCircleOutlineIcon
                  style={{ transform: "scale(1.8)", marginRight: "12px" }}
                />
                <span>Play S1 E1</span>
              </div>
              <div>
                <AddIcon
                  style={{ transform: "scale(1.4)", marginRight: "10px" }}
                />
                <BlockIcon style={{ transform: "scale(1.2)" }} />
              </div>
            </div>
            <div className={clasess.description}>
              <span style={{ fontWeight: "bold" }}>{movie.title}</span>
              <br />
              {movie.desc}
            </div>
            <div className={clasess.footer}>
              <span className={clasess.footer_elements}>
                {movie.limit} h 52 min
              </span>
              <span className={clasess.footer_elements}>{movie.year}</span>
              <SubtitlesIcon className={clasess.footer_elements} />
              <Filter3Icon className={clasess.footer_elements} />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ListItem;
