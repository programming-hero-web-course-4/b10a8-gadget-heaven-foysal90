import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Router from "./Router/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
    <ToastContainer />
  </StrictMode>
);
