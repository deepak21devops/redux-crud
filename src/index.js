import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./Components/Store";
import { Provider } from "react-redux";
import { fetchUsers } from "./Components/Posts/UserSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.dispatch(fetchUsers());
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
