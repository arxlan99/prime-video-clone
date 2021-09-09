import React, { useRef, useState } from "react";
import classes from "./Featured.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import bannerImage from "../../assets/images/banner.png";
import bannerImage2 from "../../assets/images/banner2.png";
import bannerImage3 from "../../assets/images/banner3.png";
import bannerImage4 from "../../assets/images/banner4.png";

const Featured = (props) => {
  const listRef = useRef();
  const [slideNumber, setSlideNumber] = useState(5);

  const slideHandler = (direction) => {
    if (direction === "next") {
      if (slideNumber > 2) {
        let distance = listRef.current.getBoundingClientRect().x;
        console.log(distance);
        listRef.current.style.transform += "translate(-100vw)";
        listRef.current.style.transform += `translate(${distance})`;
        setSlideNumber(slideNumber - 1);
      }
    } else if (direction === "prev") {
      if (slideNumber < 5) {
        let distance = listRef.current.getBoundingClientRect().x;
        console.log(distance);
        listRef.current.style.transform += "translate(100vw)";
        listRef.current.style.transform += `translate(${distance})`;

        setSlideNumber(slideNumber + 1);
      }
    }
  };

  return (
    <div className={classes.featured}>
      {props.type && (
        <div className={classes.category}>
          <span>{props.type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <div className={classes.image}>
        <span className={classes.iconLeft} onClick={() => slideHandler("prev")}>
          <ArrowBackIosIcon style={{ color: "#EFF1F1" }} />
        </span>
        <span
          className={classes.iconRight}
          onClick={() => slideHandler("next")}
        >
          <ArrowForwardIosIcon style={{ color: "#EFF1F1" }} />
        </span>
        <div className={classes.imageList} ref={listRef}>
          <img src={bannerImage} alt="banner" />
          <img src={bannerImage2} alt="banner" />
          <img src={bannerImage3} alt="banner" />
          <img src={bannerImage4} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
