import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, IsoOutlined } from "@material-ui/icons";
import { productRows } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MovieList.module.scss";
import { Fragment } from "react";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "movie",
      headerName: "Movie",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={classes.productListItem}>
            <img
              className={classes.productListImg}
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={"/movie/" + params.row.id}>
              <button className={classes.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes.productListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className={classes.productList}>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
