import { useContext, useEffect, useState } from "react";
import classes from "./NewList.module.scss";
import { MovieContext } from "../../store/movie-context";
import { ListContext } from "../../store/list-context";
import { useHistory } from "react-router-dom";
import {
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
} from "../../store/actions/movie";
import {
  createListFailure,
  createListStart,
  createListSuccess,
} from "../../store/actions/list";
import axios from "axios";

const NewList = () => {
  const [list, setList] = useState(null);
  const history = useHistory();

  const { dispatchList } = useContext(ListContext);
  const { movies, dispatchMovies } = useContext(MovieContext);

  useEffect(() => {
    const getMovies = async () => {
      dispatchMovies(getMoviesStart());
      try {
        const res = await axios.get("/movies", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        dispatchMovies(getMoviesSuccess(res.data));
      } catch (err) {
        dispatchMovies(getMoviesFailure());
        alert(err);
      }
    };
    getMovies();
  }, [dispatchMovies]);

  const changeHandler = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const selectHandler = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const createList = async (list) => {
      dispatchList(createListStart());
      try {
        const res = await axios.post("/lists", list, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        dispatchList(createListSuccess(res.data));
      } catch (err) {
        dispatchList(createListFailure());
        alert(err);
      }
    };
    createList(list);
    history.push("/lists");
  };

  return (
    <div className={classes.newProduct}>
      <h1 className={classes.addProductTitle}>New List</h1>
      <form className={classes.addProductForm}>
        <div className={classes.formLeft}>
          <div className={classes.addProductItem}>
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              onChange={changeHandler}
            />
          </div>
          <div className={classes.addProductItem}>
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              onChange={changeHandler}
            />
          </div>
          <div className={classes.addProductItem}>
            <label>Type</label>
            <select name="type" onChange={changeHandler}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className={classes.formRight}>
          <div className={classes.addProductItem}>
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={selectHandler}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className={classes.addProductButton} onClick={submitHandler}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewList;
