import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Store from "./store/store.js";
import { createContext } from "react";

const store = new Store();
export const Context = createContext({ store });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context.Provider value={{store}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);
