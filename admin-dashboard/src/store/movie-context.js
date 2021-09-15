import { createContext, useEffect, useReducer } from "react";
import MovieReducer from "./reducers/movie";

const initialState = {
  movies: [],
  isFetching: false,
  error: false,
};

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  const [movieState, dispatchMovies] = useReducer(MovieReducer, initialState);

  const movieValue = {
    movies: movieState.movies,
    isFetching: movieState.isFetching,
    error: movieState.error,
    dispatchMovies,
  };

  return (
    <MovieContext.Provider value={movieValue}>{children}</MovieContext.Provider>
  );
};
