import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./router";

export const App = () => (
  <>
    <ToastContainer
      position="top-right"
      theme="colored"
      autoClose={2200}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

    <Routes />
  </>
);
