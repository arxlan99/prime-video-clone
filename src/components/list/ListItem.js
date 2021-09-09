import React, { useState } from "react";
import clasess from "./ListItem.module.scss";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import BlockIcon from "@material-ui/icons/Block";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import Filter3Icon from "@material-ui/icons/Filter3";

import { motion } from "framer-motion";

import filmImage from "../../assets/images/film.png";

const ListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1, zIndex: 200, x: -10 }}
      className="container"
    >
      <div className={clasess.listItem}>
        <img src={filmImage} alt="" />
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
            <span style={{ fontWeight: "bold" }}>Lorem</span>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic,
            temporibus.
          </div>
          <div className={clasess.footer}>
            <span className={clasess.footer_elements}>1 h 52 min</span>
            <span className={clasess.footer_elements}>2021</span>
            <SubtitlesIcon className={clasess.footer_elements} />
            <Filter3Icon className={clasess.footer_elements} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListItem;
