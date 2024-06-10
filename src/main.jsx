import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createContext } from "react";

export const server = "https://movie-server-6n53.onrender.com";
// export const server = "http://localhost:4000";

// export const Context = createContext({ isAuthenticated: false });


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);