import ListReducer from "./reducers/list";
import { createContext, useReducer } from "react";

const initial_state = {
  lists: [],
  isFetching: false,
  error: false,
};

export const ListContext = createContext(initial_state);

export const ListContextProvider = ({ children }) => {
  const [state, dispatchList] = useReducer(ListReducer, initial_state);

  const listValue = {
    lists: state.lists,
    isFetching: state.isFetching,
    error: state.error,
    dispatchList,
  };

  return (
    <ListContext.Provider value={listValue}>{children}</ListContext.Provider>
  );
};
