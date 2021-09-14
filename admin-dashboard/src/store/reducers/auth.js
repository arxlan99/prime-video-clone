import { LOGIN_FAILURE, LOGIN_START, LOGIN_SUCCESS } from "../actions/auth";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case LOGIN_SUCCESS:
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case LOGIN_FAILURE:
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default AuthReducer;
