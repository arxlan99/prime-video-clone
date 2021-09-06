import React, { useRef, useState } from "react";
import classes from "./Featured.module.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import bannerImage from "../../assets/images/banner.png";
import bannerImage2 from "../../assets/images/banner2.png";
import bannerImage3 from "../../assets/images/banner3.png";
import bannerImage4 from "../../assets/images/banner4.png";

const Featured = () => {
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
