export const GET_MOVIES_START = "GET_MOVIES_START";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
export const DELETE_MOVIE_START = "DELETE_MOVIE_START";
export const DELETE_MOVIE_SUCCESS = "DELETE_MOVIE_SUCCESS";
export const DELETE_MOVIE_FAILURE = "DELETE_MOVIE_FAILURE";

export const getMoviesStart = () => ({
  type: GET_MOVIES_START,
});

export const getMoviesSuccess = (movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: movies,
});

export const getMoviesFailure = () => ({
  type: GET_MOVIES_FAILURE,
});

export const deleteMovieStart = () => ({
  type: DELETE_MOVIE_START,
});

export const deleteMovieSuccess = (id) => ({
  type: DELETE_MOVIE_SUCCESS,
  payload: id,
});

export const deleteMovieFailure = () => ({
  type: DELETE_MOVIE_FAILURE,
});
