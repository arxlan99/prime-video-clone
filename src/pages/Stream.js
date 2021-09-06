import React from "react";
import classes from "./Stream.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import video from "../assets/videos/video.mp4";

const Stream = (props) => {
  return (
    <div className={classes.stream}>
      <div className={classes.back}>
        <ArrowBackIcon />
        Home
      </div>
      <video src={video} className="video" autoPlay onProgress controls></video>
    </div>
  );
};

export default Stream;
