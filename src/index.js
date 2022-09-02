import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./ContextApi/StateProvider";
import reducer, { initialState } from "./ContextApi/reducer";
import axios from "axios";

// const recursiveSearch = (obj, searchKey, results = []) => {
//   const r = results;

//   if (obj === null || obj === undefined) return r;

//   console.log(obj);
//   const keys = Object.keys(obj);
//   Object.keys(obj).forEach((key) => {
//     const value = obj[key];
//     if (Array.isArray(value)) {
//       return;
//     }
//     if (key === searchKey && typeof value !== "object") {
//       r.push(value);
//       return r;
//     } else if (typeof value === "object") {
//       recursiveSearch(value, searchKey, r);
//     }
//   });
//   return r;
// };

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     return request;
//   },
//   async function (error) {
//     console.log(error);
//     return error;
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     console.log(recursiveSearch(response.data, "ErrorCode"));

//     return response;
//   },
//   async function (error) {
//     console.log(error);
//     return error;
//   }
// );

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateProvider>,
  document.getElementById("root")
);
