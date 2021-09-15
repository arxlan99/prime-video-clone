import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { AuthContextProvider } from "./store/auth-context";
import { MovieContextProvider } from "./store/movie-context";

ReactDOM.render(
  <AuthContextProvider>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
