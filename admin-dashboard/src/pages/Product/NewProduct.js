import React from "react";
import classes from "./NewProduct.module.scss";

const NewProduct = () => {
  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New Product</h1>
      <form className={classes.addProductForm}>
        <div className={classes.addProductItem}>
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className={classes.addProductItem}>
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className={classes.addProductItem}>
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className={classes.addProductItem}>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className={classes.addProductButton}>Create</button>
      </form>
    </div>
  );
};

export default NewProduct;
