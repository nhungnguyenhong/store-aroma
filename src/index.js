import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProductProvider } from "./context";
document.body.style.backgroundColor = "#EEEDE7";

ReactDOM.render(
    <ProductProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductProvider>,
    document.getElementById("root")
);

