import React, { useState } from "react";
import classes from "./NewMovie.module.scss";

const NewProduct = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const changeHandler = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const upload = (items) => {
  
  };

  const uploadHandler = (e) => {
    e.preventDefault();
    upload([
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };


  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New Movie</h1>
      <form className={classes.addProductForm}>
        <div className={classes.addProductItem}>
          <label>Image</label>
          <input
            type="file"
            id="img"
            name="img"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Title Image</label>
          <input
            type="file"
            id="imgTitle"
            name="imgTitle"
            onChange={(e) => setImgTitle(e.target.files[0])}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Thumbnail Image</label>
          <input
            type="file"
            id="imgSm"
            name="imgSm"
            onChange={(e) => setImgSm(e.target.files[0])}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Title</label>
          <input
            type="text"
            placeholder="John Doe"
            name="title"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Description</label>
          <input
            type="text"
            placeholder="Description"
            name="desc"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Year</label>
          <input
            type="text"
            placeholder="Year"
            name="year"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Genre</label>
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Duration</label>
          <input
            type="text"
            placeholder="Duration"
            name="duration"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Limit</label>
          <input
            type="text"
            placeholder="Limit"
            name="limit"
            onChange={changeHandler}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Is Series?</label>
          <select name="isSeries" id="isSeries" onChange={changeHandler}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className={classes.addProductItem}>
          <label>Trailer</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className={classes.addProductItem}>
          <label>Video</label>
          <input
            type="file"
            name="trailer"
            onChange={(e) => setTrailer(e.target.files[0])}
          />
        </div>
        <div className={classes.addBtnContainer}>
          {uploaded === 5 ? (
            <button
              className={classes.addProductButton}
              onClick={submitHandler}
            >
              Create
            </button>
          ) : (
            <button
              className={classes.addProductButton}
              onClick={submitHandler}
            >
              Upload
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default NewProduct;
