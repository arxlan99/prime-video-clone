import React, { useRef, useState } from "react";
import classes from "./List.module.scss";
import ListItem from "./ListItem";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const List = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const listRef = useRef();

  const sliderHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    console.log(distance);
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${298 * 4 + distance}px) `;
      setSlideNumber(slideNumber - 1);
      setShowLeftArrow(false);
      setShowRightArrow(true);
    } else if (direction === "right" && slideNumber < 1) {
      listRef.current.style.transform = `translateX(${-298 * 4 + distance}px) `;
      setSlideNumber(slideNumber + 1);
      setShowLeftArrow(true);
      setShowRightArrow(false);
    }
  };

  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>Continue watching</span>
      <div className={classes.wrapper}>
        {showLeftArrow && (
          <ArrowBackIosIcon
            className={`${classes.sliderArrow} ${classes.left} `}
            onClick={() => sliderHandler("left")}
          />
        )}
        <div className={classes.container} ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
        </div>
        {showRightArrow && (
          <ArrowForwardIosIcon
            className={`${classes.sliderArrow} ${classes.right} `}
            onClick={() => sliderHandler("right")}
          />
        )}
      </div>
    </div>
  );
};

export default List;
