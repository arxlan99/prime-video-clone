import React, { useContext, useEffect, useState } from "react";
import classes from "./NewMovie.module.scss";
import storage from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage";
import { MovieContext } from "../../store/movie-context";
import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
} from "../../store/actions/movie";
import axios from "axios";

const NewProduct = () => {
  const [movie, setMovie] = useState(null);
  const [img, setImg] = useState(null);
  const [imgTitle, setImgTitle] = useState(null);
  const [imgSm, setImgSm] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const { dispatchMovies } = useContext(MovieContext);

  const changeHandler = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  useEffect(() => {
    console.log("------------------------");
    console.log(movie);
    console.log("------------------------");
  }, [movie]);

  const upload = (items) => {
    const metadata = {
      contentType: "image/jpeg",
    };
    items.forEach((item) => {
      const fileName =
        new Date().getTime() + item.label || "test" + item.file.name || "test2";

      const storageRef = ref(storage, `items/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, item.file, metadata);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            console.log("File available at", url);
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
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

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatchMovies(createMovieStart());
    try {
      const res = await axios.post("/movies", movie, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatchMovies(createMovieSuccess(res.data));
      alert("Movie has been created :)");
    } catch (err) {
      dispatchMovies(createMovieFailure());
      alert(err + " !!!");
    }
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
              onClick={uploadHandler}
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
