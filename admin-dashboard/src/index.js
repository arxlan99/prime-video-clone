import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { MovieContextProvider } from "./store/movie-context";
import { ListContextProvider } from "./store/list-context";

ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <ListContextProvider>
        <App />
      </ListContextProvider>
    </MovieContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
