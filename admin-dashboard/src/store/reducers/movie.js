import {
  CREATE_MOVIE_FAILURE,
  CREATE_MOVIE_START,
  CREATE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  DELETE_MOVIE_START,
  DELETE_MOVIE_SUCCESS,
  GET_MOVIES_FAILURE,
  GET_MOVIES_START,
  GET_MOVIES_SUCCESS,
  UPDATE_MOVIE_FAILURE,
  UPDATE_MOVIE_START,
  UPDATE_MOVIE_SUCCESS,
} from "../actions/movie";

const MovieReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES_START:
      return {
        movies: [],
        isFetching: true,
        error: false,
      };
    case GET_MOVIES_SUCCESS:
      return {
        movies: action.payload,
        isFetching: false,
        error: false,
      };
    case GET_MOVIES_FAILURE:
      return {
        movies: [],
        isFetching: false,
        error: true,
      };
    case CREATE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case CREATE_MOVIE_SUCCESS:
      return {
        movies: [...state.movies, action.payload],
        isFetching: false,
        error: false,
      };
    case CREATE_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case UPDATE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case UPDATE_MOVIE_SUCCESS:
      return {
        movies: state.movies.map(
          (movie) => movie._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case UPDATE_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case DELETE_MOVIE_START:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case DELETE_MOVIE_SUCCESS:
      return {
        movies: state.movies.filter((movie) => movie._id !== action.payload.id),
        isFetching: false,
        error: false,
      };
    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default MovieReducer;
