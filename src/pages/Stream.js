import React from "react";
import classes from "./Stream.module.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Stream = (props) => {
  return (
    <div className={classes.stream}>
      <div className={classes.back}>
        <ArrowBackIcon />
        Home
      </div>
      <video
        src={process.env.PUBLIC_URL + "/videos/video.mp4"}
        className="video"
        autoPlay
        onProgress
        controls
      ></video>
    </div>
  );
};

export default Stream;
