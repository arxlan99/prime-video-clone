import React, { useEffect, useState } from "react";
import clasess from "./ListItem.module.scss";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import BlockIcon from "@material-ui/icons/Block";
import SubtitlesIcon from "@material-ui/icons/Subtitles";
import Filter3Icon from "@material-ui/icons/Filter3";

const ListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(props.index * 276 + 50);

  return (
    <div
      className={clasess.listItem}
      style={{ left: isHovered && props.index * 276 + 40 + props.index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeft={() => setIsHovered(false)}
    >
      <img src={process.env.PUBLIC_URL + "/images/film.png"} alt="" />
      <div className={clasess.itemInfo}>
        <div className={clasess.icons}>
          <div>
            <PlayCircleOutlineIcon />
            <span>Play S1 E1</span>
          </div>
          <div>
            <AddIcon />
            <BlockIcon />
          </div>
        </div>
        <div className={clasess.description}>
          <bold>Lorem</bold>
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
  );
};

export default ListItem;
