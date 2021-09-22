import React, { useContext, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, IsoOutlined } from "@material-ui/icons";
import { productRows } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MainList.module.scss";
import { Fragment } from "react";
import { ListContext } from "../../store/list-context";
import {
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "../../store/actions/list";

import axios from "axios";

const MainList = () => {
  const { lists, dispatchList } = useContext(ListContext);

  useEffect(() => {
    const getLists = async () => {
      dispatchList(getListsStart());
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/lists`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        dispatchList(getListsSuccess(res.data));
      } catch (err) {
        alert(err);
        dispatchList(getListsFailure());
      }
    };
    getLists();
  }, [dispatchList]);

  const deleteHandler = async (id) => {
    dispatchList(deleteListStart());
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/lists/` + id, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatchList(deleteListSuccess(id));
      alert("List has been deleted");
    } catch (err) {
      dispatchList(deleteListFailure());
      alert(err);
    }
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    { field: "title", headerName: "title", width: 250 },
    { field: "genre", headerName: "Genre", width: 150 },
    { field: "type", headerName: "type", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
            >
              <button className={classes.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => deleteHandler(params.row._id)}
            />
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className={classes.productList}>
      <DataGrid
        rows={lists}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
        checkboxSelection
      />
    </div>
  );
};

export default MainList;
