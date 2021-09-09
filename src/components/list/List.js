import React, { useRef, useState } from "react";
import classes from "./List.module.scss";
import ListItem from "./ListItem";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const List = (props) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const [listItems, setListItems] = useState(null);

  const listRef = useRef();

  const slideHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${276 * 4 + distance}px) `;
      setSlideNumber(slideNumber - 1);
      setShowLeftArrow(false);
      setShowRightArrow(true);
    } else if (direction === "right" && slideNumber < 1) {
      listRef.current.style.transform = `translateX(${-276 * 4 + distance}px) `;
      setSlideNumber(slideNumber + 1);
      setShowLeftArrow(true);
      setShowRightArrow(false);
    }
  };
  console.log(props.list);
  return (
    <div className={classes.list}>
      <span className={classes.listTitle}>{props.list.title}</span>
      <div className={classes.wrapper}>
        {showLeftArrow && (
          <ArrowBackIosIcon
            className={`${classes.sliderArrow} ${classes.left} `}
            onClick={() => slideHandler("left")}
          />
        )}
        <div className={classes.container} ref={listRef}>
          {/*  {props.list.map((item, i) => (
            <ListItem index={i} item={item} />
          ))}*/}
        </div>
        {showRightArrow && (
          <ArrowForwardIosIcon
            className={`${classes.sliderArrow} ${classes.right} `}
            onClick={() => slideHandler("right")}
          />
        )}
      </div>
    </div>
  );
};

export default List;
