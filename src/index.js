import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {ChakraProvider} from '@chakra-ui/react'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ChakraProvider>
  <Provider store={store}>
    <ToastContainer />
    <App />;
  </Provider>
  </ChakraProvider>
);


reportWebVitals();
