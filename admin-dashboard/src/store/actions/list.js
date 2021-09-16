export const GET_LISTS_START = "GET_LISTS_START";
export const GET_LISTS_SUCCESS = "GET_LISTS_SUCCESS";
export const GET_LISTS_FAILURE = "GET_LISTS_FAILURE";

export const CREATE_LIST_START = "CREATE_LIST_START";
export const CREATE_LIST_SUCCESS = "CREATE_LIST_SUCCESS";
export const CREATE_LIST_FAILURE = "CREATE_LIST_FAILURE";

export const UPLOAD_LIST_START = "UPLOAD_LIST_START";
export const UPLOAD_LIST_SUCCESS = "UPLOAD_LIST_SUCCESS";
export const UPLOAD_LIST_FAILURE = "UPLOAD_LIST_FAILURE";

export const DELETE_LIST_START = "DELETE_LIST_START";
export const DELETE_LIST_SUCCESS = "DELETE_LIST_SUCCESS";
export const DELETE_LIST_FAILURE = "DELETE_LIST_FAILURE";

export const getListsStart = () => ({
  type: GET_LISTS_START,
});

export const getListsSuccess = (lists) => ({
  type: GET_LISTS_SUCCESS,
  payload: lists,
});

export const getListsFailure = () => ({
  type: GET_LISTS_FAILURE,
});

export const createListStart = () => ({
  type: CREATE_LIST_START,
});

export const createListSuccess = (list) => ({
  type: CREATE_LIST_SUCCESS,
  payload: list,
});

export const createListFailure = () => ({
  type: CREATE_LIST_FAILURE,
});

export const UPLOADListStart = () => ({
  type: UPLOAD_LIST_START,
});

export const UPLOADListSuccess = (movie) => ({
  type: UPLOAD_LIST_SUCCESS,
  payload: movie,
});

export const UPLOADListFailure = () => ({
  type: UPLOAD_LIST_FAILURE,
});

export const deleteListStart = () => ({
  type: DELETE_LIST_START,
});

export const deleteListSuccess = (id) => ({
  type: DELETE_LIST_SUCCESS,
  payload: id,
});

export const deleteListFailure = () => ({
  type: DELETE_LIST_FAILURE,
});
