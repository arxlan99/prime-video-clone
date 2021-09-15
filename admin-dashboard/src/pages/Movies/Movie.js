import React from "react";
import classes from "./Movie.module.scss";
import { Link, useLocation } from "react-router-dom";
import Chart from "../../components/Content/Chart/Chart";
import { productData } from "../../data/dummyData";
import { MovieSharp, Publish } from "@material-ui/icons";

const Product = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className={classes.product}>
      <div className={classes.productTitleContainer}>
        <h1 className={classes.productTitle}>Movie</h1>
        <Link to="/newmovie">
          <button className={classes.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={classes.productTop}>
        <div className={classes.productTopLeft}>
          <Chart data={productData} dataKey="Sales" title="Movie Performance" />
        </div>
        <div className={classes.productTopRight}>
          <div className={classes.productInfoTop}>
            <img src={movie.img} alt="" className={classes.productInfoImg} />

            <span className={classes.productName}>{movie.title}</span>
          </div>
          <div className={classes.productInfoBottom}>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>id:</span>
              <span className={classes.productInfoValue}>{movie._id}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>genre:</span>
              <span className={classes.productInfoValue}>{movie.genre}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>year:</span>
              <span className={classes.productInfoValue}>{movie.year}</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>limit:</span>
              <span className={classes.productInfoValue}>{movie.limit}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.productBottom}>
        <form className={classes.productForm}>
          <div className={classes.productFormLeft}>
            <label>Movie Title</label>
            <input type="text" placeholder={movie.title} />
            <label>Year</label>
            <input type="text" placeholder={movie.year} />
            <label>Genre</label>
            <input type="text" placeholder={movie.genre} />
            <label>Limit</label>
            <input type="text" placeholder={movie.limit} />
            <label>Trailer</label>
            <input type="file" placeholder={movie.trailer} />
            <label>Video</label>
            <input type="file" placeholder={movie.video} />
          </div>
          <div className={classes.productFormRight}>
            <div className={classes.productUpload}>
              <img
                src={movie.img}
                alt=""
                className={classes.productUploadImg}
              />
              <label for={classes.file}>
                <Publish />
              </label>
              <input id={classes.file} style={{ display: "none" }} />
            </div>
            <button className={classes.productButton}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
