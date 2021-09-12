import React from "react";
import classes from "./Product.module.scss";
import { Link } from "react-router-dom";
import Chart from "../../components/Content/Chart/Chart";
import { productData } from "../../data/dummyData";
import { Publish } from "@material-ui/icons";

const Product = () => {
  return (
    <div className={classes.product}>
      <div className={classes.productTitleContainer}>
        <h1 className={classes.productTitle}>Product</h1>
        <Link to="/newproduct">
          <button className={classes.productAddButton}>Create</button>
        </Link>
      </div>
      <div className={classes.productTop}>
        <div className={classes.productTopLeft}>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className={classes.productTopRight}>
          <div className={classes.productInfoTop}>
            <img
              src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className={classes.productInfoImg}
            />

            <span className={classes.productName}>Apple Airpods</span>
          </div>
          <div className={classes.productInfoBottom}>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>id:</span>
              <span className={classes.productInfoValue}>123</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>sales:</span>
              <span className={classes.productInfoValue}>5123</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>active:</span>
              <span className={classes.productInfoValue}>yes</span>
            </div>
            <div className={classes.productInfoItem}>
              <span className={classes.productInfoKey}>in stock:</span>
              <span className={classes.productInfoValue}>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.productBottom}>
        <form className={classes.productForm}>
          <div className={classes.productFormLeft}>
            <label>Product Name</label>
            <input placeholder={classes.Apple} />
            <label>In Stock</label>
            <select name={classes.inStock} id={classes.idStock}>
              <option value={classes.yes}>Yes</option>
              <option value={classes.no}>No</option>
            </select>
            <label>Active</label>
            <select name={classes.active} id={classes.active}>
              <option value={classes.yes}>Yes</option>
              <option value={classes.no}>No</option>
            </select>
          </div>
          <div className={classes.productFormRight}>
            <div className={classes.productUpload}>
              <img
                src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
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
