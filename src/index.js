import { BrowserRouter as Router } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";

import "./style/style.scss";

// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// если React 18
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.Fragment>
        <Router>
            <App />
        </Router>
    </React.Fragment>
);
