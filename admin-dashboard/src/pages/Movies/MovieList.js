import React, { useContext, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, IsoOutlined } from "@material-ui/icons";
import { productRows } from "../../data/dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import classes from "./MovieList.module.scss";
import { Fragment } from "react";
import { MovieContext } from "../../store/movie-context";
import {
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "../../store/actions/movie";
import axios from "axios";

const ProductList = () => {
  const { movies, dispatchMovies } = useContext(MovieContext);
  useEffect(() => {
    console.log(process.env);
  }, []);

  useEffect(() => {
    const getMovie = async () => {
      dispatchMovies(getMoviesStart);
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/movies`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        await dispatchMovies(getMoviesSuccess(res.data));
      } catch (error) {
        dispatchMovies(getMoviesFailure);
        console.log(error);
      }
    };
    getMovie();
  }, [movies, dispatchMovies]);

  const deleteHandler = (id) => {
    const deleteMovie = async () => {
      dispatchMovies(deleteMovieStart);
      try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/movies/` + id, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        await dispatchMovies(deleteMovieSuccess(id));
      } catch (error) {
        dispatchMovies(deleteMovieFailure);
        console.log(error);
      }
    };
    deleteMovie();
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 230 },
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
            {params.row.title}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Genre", width: 120 },
    { field: "year", headerName: "Year", width: 120 },
    { field: "limit", headerName: "Limit", width: 120 },
    { field: "isSeries", headerName: "Is Series", width: 120 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link
              to={{ pathname: "/movie/" + params.row._id, movie: params.row }}
            >
              <button className={classes.productListEdit}>Edit</button>
            </Link>
            <DeleteOutline
              className={classes.productListDelete}
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
        rows={movies}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        getRowId={(r) => r._id}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
